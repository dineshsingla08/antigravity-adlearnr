const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize WhatsApp Web Client
const client = new Client({
    authStrategy: new LocalAuth()
});

let isWhatsappReady = false;

client.on('qr', (qr) => {
    console.log('\n======================================================');
    console.log('📱 WHATSAPP AUTHENTICATION REQUIRED');
    console.log('Please scan the QR code below with your WhatsApp:');
    qrcode.generate(qr, { small: true });
    console.log('======================================================\n');
});

client.on('ready', () => {
    console.log('✅ WhatsApp Web client is ready and authenticated!');
    isWhatsappReady = true;
});

client.on('auth_failure', msg => {
    console.error('❌ WhatsApp Web authentication failed:', msg);
});

client.initialize();

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

        // --- WHATSAPP INTEGRATION via whatsapp-web.js ---
        const textMsg = `*New Lead from Website!* 🚀\n\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company}\n*Phone:* ${phone || 'Not provided'}\n*Service:* ${service}\n*Revenue:* ${revenue}\n*Message:* ${message || 'Not provided'}`;

        if (isWhatsappReady) {
            try {
                // Formatting Indian numbers properly for whatsapp-web.js protocol
                const chatId = '919729526111@c.us';
                await client.sendMessage(chatId, textMsg);
                console.log('WhatsApp notification sent successfully to yourself!');
            } catch (w_err) {
                console.error('Error sending WhatsApp notification natively:', w_err);
            }
        } else {
            console.log("⚠️ WhatsApp Client not ready yet. Skipping message send.");
            console.log("MOCK WHATSAPP MESSAGE -> 'New Enquiry from " + name + "!'");
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
