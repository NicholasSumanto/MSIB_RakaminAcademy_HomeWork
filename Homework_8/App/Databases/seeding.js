const fs = require('fs');
const { connectToDatabase } = require('../connect.js'); // Sesuaikan dengan path yang benar

// Baca isi file seeding.sql
const seedQuery = fs.readFileSync('Databases/seeding.sql',{encoding: 'utf8'});

// Fungsi untuk menjalankan perintah SQL seeding
const seedDatabase = async () => {
  try {
    const client = await connectToDatabase(); // Gunakan fungsi koneksi yang sudah ada
    await client.query(seedQuery); // Ganti sqlScript menjadi seedQuery
    console.log('Seeding berhasil.');
    client.end(); // Tutup koneksi setelah selesai
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Jalankan seeding
seedDatabase();

