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

        // --- WHATSAPP INTEGRATION ---
        // To send an automated WhatsApp message to your own number, you would typically use an API like Twilio.
        // Example Twilio Implementation (requires TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER):

        /*
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        if (accountSid && authToken) {
            const client = require('twilio')(accountSid, authToken);
            const textMsg = `New Lead! 🙌\n\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\nRevenue: ${revenue}\nMessage: ${message}`;
            
            client.messages.create({
                body: textMsg,
                from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
                to: 'whatsapp:+918958573159'
            })
            .then(message => console.log('WhatsApp notification sent:', message.sid))
            .catch(err => console.error('Error sending WhatsApp:', err));
        } else {
            console.log("No Twilio credentials found. Mocking WhatsApp message send.");
            console.log("MOCK WHATSAPP MESSAGE -> 'New Lead from " + name + "!'");
        }
        */

        // Simple console mock for local dev
        console.log("MOCK WHATSAPP MESSAGE -> 'New Enquiry from " + name + "! | phone: " + phone + "'");

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
