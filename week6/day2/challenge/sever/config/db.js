const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_pg_password',
  port: 5432,
});

module.exports = pool;