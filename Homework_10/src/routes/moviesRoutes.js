const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesControllers');


router.get('/', async (req, res) => {
  try {
    const movies = await moviesController.getMovies();
    res.render('movies/movie', { movies: movies });
  } catch (error) {
    console.error('Gagal pada pengambilan data', error);
    res.status(500).json({ error: 'Server error!' });
  }
});


router.post('/create', async (req, res) => {
  try {
    const result = await moviesController.createMovie(req, res);
    res.json(result);
  } catch (error) {
    console.error('Gagal pada penambahan data', error);
    res.status(500).json({ error: 'Server error!' });
  }
});


router.put('/update/:id', async (req, res) => {
    try {
      const result = await moviesController.updateMovie(req, res);
      res.json(result);
    } catch (error) {
      console.error('Gagal pada pembaruan data', error);
      res.status(500).json({ error: 'Server error!' });
    }
  });


  router.delete('/delete/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
      await moviesController.deleteMovie(movieId);
      res.redirect('/movies'); // Redirect to the list of movies after successful deletion
    } catch (error) {
      console.error('Gagal pada penghapusan data', error);
      res.status(500).json({ error: 'Server error!' });
    }
  });

module.exports = router;
