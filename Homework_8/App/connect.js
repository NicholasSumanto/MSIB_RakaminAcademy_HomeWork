const { Pool } = require('pg');

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'kumpulan_film', 
  password: 'skyres123', 
  port: 5432, 
});


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


module.exports = {
  connectToDatabase,
};
