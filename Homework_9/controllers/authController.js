const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../models/dbConfig');

const signToken = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  };

  const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
  
    if (!token) return res.status(401).json({ message: 'Akses ditolak,tidak ada Token.' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).json({ message: 'Token Invalid.' });
    }
  };


  const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        client.release();

        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'Pengguna Tidak ditemukan' });
        }

        const validPassword = await bcrypt.compare(password, result.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Password Invalid' });
        }

        const token = jwt.sign({ id: result.rows[0].id, email: result.rows[0].email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.header('x-auth-token', token).json({ message: 'Login berhasil', token: token });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const client = await pool.connect();
        const result = await client.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
        client.release();
        res.status(200).json({ message: 'Registrasi berhasil' });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = {
    signToken,
    authMiddleware,
    login,
    register
};
