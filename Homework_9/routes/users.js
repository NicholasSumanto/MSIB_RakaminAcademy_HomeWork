/**
 * @swagger
 * /users:
 *   get:
 *     summary: Mendapatkan daftar pengguna
 *     description: Mengambil daftar pengguna yang terdaftar
 *     responses:
 *       200:
 *         description: Daftar pengguna berhasil diambil
 *       500:
 *         description: Terjadi kesalahan server
 * 
 *   post:
 *     summary: Membuat pengguna baru
 *     description: Membuat pengguna baru dengan username dan password
 *     parameters:
 *       - name: username
 *         description: Nama pengguna
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: Kata sandi pengguna
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Pengguna berhasil dibuat
 *       500:
 *         description: Terjadi kesalahan server
 * 
 * /users/{id}:
 *   put:
 *     summary: Memperbarui pengguna
 *     description: Memperbarui informasi pengguna berdasarkan ID
 *     parameters:
 *       - name: id
 *         description: ID pengguna
 *         in: path
 *         required: true
 *         type: integer
 *       - name: username
 *         description: Nama pengguna
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: Kata sandi pengguna
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Pengguna berhasil diperbarui
 *       500:
 *         description: Terjadi kesalahan server
 * 
 *   delete:
 *     summary: Menghapus pengguna
 *     description: Menghapus pengguna berdasarkan ID
 *     parameters:
 *       - name: id
 *         description: ID pengguna
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Pengguna berhasil dihapus
 *       500:
 *         description: Terjadi kesalahan server
 */

// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', authController.authMiddleware, userController.getUsers);
router.post('/', authController.authMiddleware, userController.createUser);
router.put('/:id', authController.authMiddleware, userController.updateUser);
router.delete('/:id', authController.authMiddleware, userController.deleteUser);

module.exports = router;
