const fs = require('fs');
const { connectToDatabase } = require('../connect.js'); 

// Baca isi file seeding.sql
const seedQuery = fs.readFileSync('Databases/seeding.sql',{encoding: 'utf8'});

// Fungsi untuk menjalankan perintah SQL seeding
const seedDatabase = async () => {
  try {
    const client = await connectToDatabase(); 
    await client.query(seedQuery); // Ganti sqlScript menjadi seedQuery
    console.log('Seeding berhasil.');
    client.end(); 
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Jalankan seeding
seedDatabase();

