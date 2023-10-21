const pool = require('../config/dbConfig');

const getUsers = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users'); 
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    throw error;
  }
};



const createUser = async (req, res) => {
  const { email, gender, password, role } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO "user" (email, gender, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, gender, password, role]
    );
    res.json(result.rows[0]);
    client.release();
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, gender, password, role } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE "user" SET email=$1, gender=$2, password=$3, role=$4 WHERE id=$5 RETURNING *',
      [email, gender, password, role, id]
    );
    res.json(result.rows[0]);
    client.release();
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM "user" WHERE id=$1', [id]);
    res.json({ message: 'Berhasil menghapus user' });
    client.release();
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
