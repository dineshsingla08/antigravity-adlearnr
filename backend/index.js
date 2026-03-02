const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcodeTerminal = require('qrcode-terminal');
const qrcodeWeb = require('qrcode');

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
let currentQrCodeDataUrl = null;

client.on('qr', async (qr) => {
    console.log('\n======================================================');
    console.log('📱 WHATSAPP AUTHENTICATION REQUIRED');
    console.log('Please scan the QR code below with your WhatsApp:');
    qrcodeTerminal.generate(qr, { small: true });

    // Also save it to render visually on the browser
    try {
        currentQrCodeDataUrl = await qrcodeWeb.toDataURL(qr);
        console.log(`\nAlternatively, visit http://localhost:${PORT}/api/whatsapp-auth in your browser to scan the QR code easier!`);
    } catch (err) {
        console.error('Failed to generate web QR Code', err);
    }
    console.log('======================================================\n');
});

client.on('ready', () => {
    console.log('✅ WhatsApp Web client is ready and authenticated!');
    isWhatsappReady = true;
    currentQrCodeDataUrl = null; // Clear QR code as it's no longer needed
});

client.on('auth_failure', msg => {
    console.error('❌ WhatsApp Web authentication failed:', msg);
    isWhatsappReady = false;
});

client.on('disconnected', (reason) => {
    console.log('❌ WhatsApp Web client was disconnected:', reason);
    isWhatsappReady = false;
});

client.initialize();

// GET /api/whatsapp-auth - Visual QR Code Scanner Page
app.get('/api/whatsapp-auth', (req, res) => {
    if (isWhatsappReady) {
        return res.send(`
            <div style="display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif; flex-direction:column; background:#f0ffd4; color:#2e7d32; text-align:center;">
                <h1>✅ WhatsApp is Successfully Connected!</h1>
                <p>You can close this tab. The backend will now automatically send notifications.</p>
            </div>
        `);
    }

    if (!currentQrCodeDataUrl) {
        return res.send(`
            <div style="display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif; flex-direction:column; background:#f4f4f4; color:#333; text-align:center;">
                <h1>⏳ Generating new WhatsApp QR Code...</h1>
                <p>Please refresh this page in a few seconds.</p>
            </div>
        `);
    }

    res.send(`
        <div style="display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif; flex-direction:column; background:#fafafa; color:#333; text-align:center;">
            <h1>📱 Link Backend to WhatsApp</h1>
            <p style="margin-bottom: 20px;">Open WhatsApp on your phone -> Settings -> Linked Devices -> Scan this QR Code.</p>
            <div style="border: 2px solid #ddd; padding:20px; border-radius:10px; background:#fff;">
                <img src="${currentQrCodeDataUrl}" alt="QR Code" style="width: 300px; height: 300px;" />
            </div>
            <p style="margin-top: 20px; font-size: 0.9em; color:#666;">This page will not auto-refresh. Once you scan, check your terminal for the success message!</p>
        </div>
    `);
});

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
