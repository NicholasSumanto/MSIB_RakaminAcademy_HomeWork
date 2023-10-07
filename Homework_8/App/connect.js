const { Pool } = require('pg');

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  user: 'postgres', // Ganti dengan nama pengguna PostgreSQL Anda
  host: 'localhost', // Ganti dengan host database Anda
  database: 'kumpulan_film', // Ganti dengan nama database Anda
  password: 'skyres123', // Ganti dengan kata sandi database Anda
  port: 5432, // Ganti dengan port PostgreSQL yang sesuai
});

// Membuat fungsi untuk menghubungkan ke database
const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log('Terhubung ke database PostgreSQL');
    return client;
  } catch (err) {
    console.error('Gagal terhubung ke database:', err);
    throw err;
  }
};

// Ekspor fungsi untuk menghubungkan ke database
module.exports = {
  connectToDatabase,
};
