const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// POST /api/enquiries - Submit a new enquiry
app.post('/api/enquiries', (req, res) => {
    const { name, email, company, phone, service, revenue, message } = req.body;

    const query = `INSERT INTO enquiries (name, email, company, phone, service, revenue, message) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [name, email, company, phone, service, revenue, message];

    db.run(query, params, function (err) {
        if (err) {
            console.error('Failed to insert enquiry:', err.message);
            return res.status(500).json({ error: 'Failed to process enquiry' });
        }

        const enquiryId = this.lastID;
        console.log(`New enquiry stored in CRM: ID ${enquiryId} from ${name} at ${company}`);

        // --- WHATSAPP INTEGRATION via Twilio ---
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

        if (accountSid && authToken && twilioPhone) {
            const client = require('twilio')(accountSid, authToken);
            const textMsg = `*New Lead from Website!* 🚀\n\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company}\n*Phone:* ${phone || 'Not provided'}\n*Service:* ${service}\n*Revenue:* ${revenue}\n*Message:* ${message || 'Not provided'}`;

            client.messages.create({
                body: textMsg,
                from: `whatsapp:${twilioPhone}`,
                to: 'whatsapp:+918958573159'
            })
                .then(message => console.log('WhatsApp notification sent successfully:', message.sid))
                .catch(err => console.error('Error sending WhatsApp notification via Twilio:', err.message));
        } else {
            console.log("No Twilio credentials found in .env! Cannot send actual WhatsApp message.");
            console.log("MOCK WHATSAPP MESSAGE -> 'New Enquiry from " + name + "! | phone: " + phone + "'");
        }

        res.status(201).json({
            success: true,
            id: enquiryId,
            message: 'Enquiry submitted successfully. Our team will contact you soon.'
        });
    });
});

// GET /api/enquiries - Fetch all enquiries for the CRM dashboard
app.get('/api/enquiries', (req, res) => {
    db.all(`SELECT * FROM enquiries ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) {
            console.error('Failed to fetch CRM enquiries:', err.message);
            return res.status(500).json({ error: 'Failed to fetch enquiries' });
        }
        res.status(200).json({ success: true, enquiries: rows });
    });
});

app.listen(PORT, () => {
    console.log(`Backend CRM server running on http://localhost:${PORT}`);
});
