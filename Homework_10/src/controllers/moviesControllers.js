
const pool = require('../config/dbConfig');

const getMovies = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM movies');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    throw error;
  }
};

const createMovie = async (req, res) => {
    const { title, genres, year, photo } = req.body;
    if (!title || !genres || !year) {
      return res.status(400).json({ error: 'Data title, genres, dan year harus diisi' });
    }
    try {
      const client = await pool.connect();
      const existingMovie = await client.query('SELECT * FROM movies WHERE title = $1 AND genres = $2 AND year = $3', [title, genres, year]);
      if (existingMovie.rows.length > 0) {
        return res.status(409).json({ error: 'Data film sudah ada' });
      }

      const lastIdResult = await client.query('SELECT id FROM movies ORDER BY id DESC LIMIT 1');
      const lastId = lastIdResult.rows.length === 0 ? 0 : lastIdResult.rows[0].id;
      const newId = lastId + 1;
      const result = await client.query(
        'INSERT INTO movies (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [newId, title, genres, year, photo]
      );
      res.json(result.rows[0]);
      client.release();
    } catch (error) {
      console.error('Gagal pada pengambilan data', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, genres, year, photo } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query(
        'UPDATE movies SET title=$1, genres=$2, year=$3, photo=$4 WHERE id=$5 RETURNING *',
        [title, genres, year, photo, id]
      );
      res.json(result.rows[0]);
      client.release();
    } catch (error) {
      console.error('Gagal pada pengambilan data', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM movies WHERE id=$1', [id]);
    res.json({ message: 'Film berhasil dihapus' });
    client.release();
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
