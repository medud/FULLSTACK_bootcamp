const pool = require('../config/db');

const createUser = async (userData, hashedPassword) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const userRes = await client.query(
      'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
      [userData.email, userData.username, userData.first_name, userData.last_name]
    );
    const passwordRes = await client.query(
      'INSERT INTO hashpwd (username, password) VALUES ($1, $2) RETURNING *',
      [userData.username, hashedPassword]
    );
    await client.query('COMMIT');
    return userRes.rows[0];
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const getAllUsers = () => {
  return pool.query('SELECT * FROM users');
};

const getUserById = (id) => {
  return pool.query('SELECT * FROM users WHERE id = $1', [id]);
};

const updateUser = (id, userData) => {
  return pool.query(
    'UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *',
    [userData.email, userData.username, userData.first_name, userData.last_name, id]
  );
};

const getHashedPassword = (username) => {
  return pool.query('SELECT * FROM hashpwd WHERE username = $1', [username]);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getHashedPassword,
};

