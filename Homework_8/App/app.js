const express = require('express');
const { connectToDatabase } = require('./connect'); // Impor modul koneksi database

const app = express();
const PORT = process.env.PORT || 3000;

// Terapkan koneksi ke database
connectToDatabase()
  .then((client) => {
    // Mulai server setelah koneksi berhasil
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });

    app.get('/film', async (req, res) => {
      try {
        const result = await client.query('SELECT film_id, title, description, release_year FROM film');
        const formattedData = result.rows.map((row) => (
          `ID: ${row.film_id}\nTitle: ${row.title}\nDescription: ${row.description}\nRelease Year: ${row.release_year}\n`
        ));
        const responseText = formattedData.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.send(responseText);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Terjadi kesalahan saat mengambil data film.');
      }
    });
    app.get('/film/:id', async (req, res) => {
      const filmId = req.params.id;
    
      try {
        const result = await client.query('SELECT * FROM film WHERE film_id = $1', [filmId]);
    
        if (result.rows.length === 0) {
          res.status(404).send('Data film tidak ditemukan.');
          return;
        }
    
        const filmData = result.rows[0];
        res.json(filmData);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Terjadi kesalahan saat mengambil data film.');
      }
    });
    app.get('/category', async (req, res) => {
      try {
        const result = await client.query('SELECT * FROM category');
        const categories = result.rows.map((row) => row.name); // Ambil kolom "name" dari hasil query
    
        res.json(categories);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Terjadi kesalahan saat mengambil data category.');
      }
    });
    app.get('/listfilm/:category', async (req, res) => {
      const category = req.params.category; // Ambil nilai kategori dari parameter URL
    
      try {
        const result = await client.query(
          'SELECT film.title FROM film ' +
          'INNER JOIN film_category ON film.film_id = film_category.film_id ' +
          'INNER JOIN category ON film_category.category_id = category.category_id ' +
          'WHERE category.name = $1',
          [category]
        );
    
        const films = result.rows.map((row) => row.title);
    
        if (films.length === 0) {
          res.status(404).json({ message: 'Tidak ada film dalam kategori ini.' });
        } else {
          res.json(films);
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Terjadi kesalahan saat mengambil data film.');
      }
    });
  
  })
  .catch((err) => {
    console.error('Koneksi ke database gagal:', err);
  });
