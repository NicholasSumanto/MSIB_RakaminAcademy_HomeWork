/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Mendapatkan daftar film
 *     description: Mengambil daftar film yang tersedia
 *     responses:
 *       200:
 *         description: Daftar film berhasil diambil
 *       500:
 *         description: Terjadi kesalahan server
 * 
 *   post:
 *     summary: Menambahkan film baru
 *     description: Menambahkan film baru ke daftar film
 *     parameters:
 *       - name: title
 *         description: Judul film
 *         in: formData
 *         required: true
 *         type: string
 *       - name: genres
 *         description: Genre film
 *         in: formData
 *         required: true
 *         type: string
 *       - name: year
 *         description: Tahun rilis film
 *         in: formData
 *         required: true
 *         type: integer
 *     responses:
 *       201:
 *         description: Film berhasil ditambahkan
 *       500:
 *         description: Terjadi kesalahan server
 * 
 * /movies/{id}:
 *   put:
 *     summary: Memperbarui film
 *     description: Memperbarui film berdasarkan ID
 *     parameters:
 *       - name: id
 *         description: ID film
 *         in: path
 *         required: true
 *         type: integer
 *       - name: title
 *         description: Judul film
 *         in: formData
 *         required: true
 *         type: string
 *       - name: genres
 *         description: Genre film
 *         in: formData
 *         required: true
 *         type: string
 *       - name: year
 *         description: Tahun rilis film
 *         in: formData
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Film berhasil diperbarui
 *       500:
 *         description: Terjadi kesalahan server
 * 
 *   delete:
 *     summary: Menghapus film
 *     description: Menghapus film berdasarkan ID
 *     parameters:
 *       - name: id
 *         description: ID film
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Film berhasil dihapus
 *       500:
 *         description: Terjadi kesalahan server
 */

// routes/movies.js
const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const authController = require('../controllers/authController');

router.get('/', authController.authMiddleware, moviesController.getMovies);
router.post('/', authController.authMiddleware, moviesController.createMovie);
router.put('/:id', authController.authMiddleware, moviesController.updateMovie);
router.delete('/:id', authController.authMiddleware, moviesController.deleteMovie);

module.exports = router;
