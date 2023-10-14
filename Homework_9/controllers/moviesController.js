const dbConfig = require('../models/dbConfig');
const pool = dbConfig.pool;


// GET movies
const getMovies = async (req, res) => {
    try {
      const { limit } = req.query;
      let movies;
  
      if (limit) {
        movies = await pool.query('SELECT * FROM movies LIMIT $1', [limit]);
      } else {
        movies = await pool.query('SELECT * FROM movies');
      }
  
      res.status(200).json(movies.rows);
    } catch (err) {
      console.error('Error menampilkan movie:', err);
      res.status(500).send('Gagal memuat data film');
    }
  };
  

// POST movie
const createMovie = async (req, res) => {
    const { id, title, genres, year } = req.body;
  
    if (!id || !title || !genres || !year) {
      return res.status(400).send('Harus menginputkan id, title, genres, dan year dari movie');
    }
  
    try {
      const newMovie = await pool.query(
        'INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4) RETURNING *',
        [id, title, genres, year]
      );
  
      res.status(201).json(newMovie.rows[0]);
    } catch (err) {
      console.error('Error menambah movie maru:', err);
      res.status(500).send('Gagal untuk menambah movie baru');
    }
  };
  

// PUT movie
const updateMovie = async (req, res) => {
  const id = req.params.id;
  const { title, genres, year } = req.body;

  try {
    const updatedMovie = await pool.query(
      'UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4 RETURNING *',
      [title, genres, year, id]
    );

    res.status(200).json(updatedMovie.rows[0]);
  } catch (err) {
    console.error('Error mengupdate movie:', err);
    res.status(500).send('Gagal untuk mengupdate movie');
  }
};

// DELETE movie
const deleteMovie = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deleteResponse = await pool.query('DELETE FROM movies WHERE id = $1', [id]);
      if (deleteResponse.rowCount === 0) {
        return res.status(404).send('Movie not found');
      }
      res.status(200).send('Movie berhasil di hapus');
    } catch (err) {
      console.error('Error menghapus movie:', err);
      res.status(500).send('Gagal untuk menghapus movie');
    }
  };
  
module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
