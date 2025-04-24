const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await userModel.createUser(
      { email, username, first_name, last_name },
      hashedPassword
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await userModel.getHashedPassword(username);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid password' });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await userModel.getAllUsers();
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

const getUser = async (req, res) => {
  try {
    const result = await userModel.getUserById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userModel.updateUser(req.params.id, req.body);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
};

