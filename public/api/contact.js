// Serverless function for handling contact form submissions with Neon Database
// This will work with Vercel, Netlify, or similar platforms

const { Pool } = require('pg');

// Database connection for Neon
const pool = new Pool({
  connectionString: process.env.VITE_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }


    const client = await pool.connect();
    
    try {
      // Create contacts table if it doesn't exist
      await client.query(`
        CREATE TABLE IF NOT EXISTS contacts (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(500),
          message TEXT NOT NULL,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Insert contact data
      const result = await client.query(
        `INSERT INTO contacts (name, email, subject, message, timestamp) 
         VALUES ($1, $2, $3, $4, $5) 
         RETURNING id, created_at`,
        [name, email, subject || 'Contact from Portfolio', message, timestamp || new Date().toISOString()]
      );

      const contactData = result.rows[0];
      
      res.status(200).json({
        success: true,
        data: contactData,
        message: 'Contact stored successfully in Neon database'
      });
    } finally {
      client.release();
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to store contact in Neon database',
      details: error.message 
    });
  }
}