const dbConfig = require('../models/dbConfig');
const pool = dbConfig.pool;

// GET users
const getUsers = async (req, res) => {
    try {
        const { limit } = req.query;
        let movies;
    
        if (limit) {
          movies = await pool.query('SELECT * FROM users LIMIT $1', [limit]);
        } else {
          movies = await pool.query('SELECT * FROM users');
        }
    
        res.status(200).json(movies.rows);
      } catch (err) {
        console.error('Error menampilkan users:', err);
        res.status(500).send('Gagal memuat data users');
      }
    };
  

// POST user
const createUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username dan password harus diisi');
    }

    try {
        const newUser = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, password]
        );

        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Failed to create new user');
    }
};

// PUT user
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { username, password } = req.body;

    try {
        const updatedUser = await pool.query(
            'UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *',
            [username, password, id]
        );

        res.status(200).json(updatedUser.rows[0]);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).send('Failed to update user');
    }
};

// DELETE user
const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteResponse = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        if (deleteResponse.rowCount === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User berhasil dihapus');
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Gagal menghapus user');
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
