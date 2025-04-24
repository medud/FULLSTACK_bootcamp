// server/config/initDb.js
const pool = require('./db');

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100),
        username VARCHAR(100) UNIQUE,
        first_name VARCHAR(100),
        last_name VARCHAR(100)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS hashpwd (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) REFERENCES users(username),
        password TEXT NOT NULL
      );
    `);

    console.log('✅ Tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
  }
};

module.exports = createTables;
