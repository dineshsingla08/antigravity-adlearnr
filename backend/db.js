const sqlite3 = require('sqlite3').verbose();
const { Pool } = require('pg');
const path = require('path');

let dbWrapper = {};

if (process.env.DATABASE_URL) {
    console.log('Using PostgreSQL database.');
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    pool.query(`
        CREATE TABLE IF NOT EXISTS enquiries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            company VARCHAR(255),
            phone VARCHAR(255),
            service VARCHAR(255),
            revenue VARCHAR(255),
            message TEXT,
            status VARCHAR(50) DEFAULT 'New',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `).then(() => {
        console.log('PostgreSQL: Enquiries table is ready.');
    }).catch(err => {
        console.error('PostgreSQL Error initializing DB:', err.message);
    });

    dbWrapper = {
        run: async (query, params, callback) => {
            let i = 1;
            let pgQuery = query.replace(/\?/g, () => `$${i++}`);
            if (pgQuery.trim().toUpperCase().startsWith('INSERT')) {
                pgQuery += ' RETURNING id';
            }
            try {
                const res = await pool.query(pgQuery, params || []);
                const ctx = {
                    lastID: res.rows[0]?.id,
                    changes: res.rowCount
                };
                if (callback) callback.call(ctx, null);
            } catch (err) {
                if (callback) callback(err);
            }
        },
        all: async (query, params, callback) => {
            let i = 1;
            const pgQuery = query.replace(/\?/g, () => `$${i++}`);
            try {
                const res = await pool.query(pgQuery, params || []);
                if (callback) callback(null, res.rows);
            } catch (err) {
                if (callback) callback(err);
            }
        }
    };
} else {
    // Local SQLite fallback
    const dbPath = path.resolve(__dirname, 'crm.db');
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Error opening database', err.message);
        } else {
            console.log('Connected to the CRM SQLite database.');
            db.run(`CREATE TABLE IF NOT EXISTS enquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT,
                company TEXT,
                phone TEXT,
                service TEXT,
                revenue TEXT,
                message TEXT,
                status TEXT DEFAULT 'New',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`, (err) => {
                if (err) {
                    console.error('Error creating table', err.message);
                } else {
                    console.log('Enquiries table is ready.');
                    db.run(`ALTER TABLE enquiries ADD COLUMN status TEXT DEFAULT 'New'`, (alterErr) => { });
                }
            });
        }
    });

    dbWrapper = {
        run: (query, params, callback) => db.run(query, params, callback),
        all: (query, params, callback) => db.all(query, params, callback)
    };
}

module.exports = dbWrapper;
