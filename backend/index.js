const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const nodemailer = require('nodemailer');

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

    db.run(query, params, async function (err) {
        if (err) {
            console.error('Failed to insert enquiry:', err.message);
            return res.status(500).json({ error: 'Failed to process enquiry' });
        }

        const enquiryId = this.lastID;
        console.log(`New enquiry stored in CRM: ID ${enquiryId} from ${name} at ${company}`);

        // --- EMAIL INTEGRATION via Nodemailer ---
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (emailUser && emailPass) {
            try {
                // Configure your SMTP transporter (e.g., Gmail)
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: emailUser,       // Your sender email
                        pass: emailPass        // App Password (if using Gmail)
                    }
                });

                const mailOptions = {
                    from: emailUser,
                    to: 'adlearnr@gmail.com',  // Send directly to this address
                    subject: `New Lead from Website: ${name} (${company})`,
                    text: `New Lead from Website! 🚀\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone || 'Not provided'}\nService Needed: ${service}\nMonthly Revenue: ${revenue || 'Not provided'}\nMessage/Goals: ${message || 'Not provided'}`
                };

                await transporter.sendMail(mailOptions);
                console.log('✅ Email notification sent successfully to adlearnr@gmail.com!');

            } catch (email_err) {
                console.error('❌ Error sending Email notification:', email_err.message);
            }
        } else {
            console.log("⚠️ EMAIL_USER or EMAIL_PASS missing in .env! Skipping email transport.");
            console.log("MOCK EMAIL SENT -> 'New Enquiry from " + name + "!'");
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
