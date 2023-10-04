const hitungBangunDatar = require('./bangundatar.js');

// Contoh penggunaan untuk menghitung luas dan keliling
const sisiPersegi = 8;
const luasPersegi = hitungBangunDatar.menghitungLuasPersegi(sisiPersegi);
const kelilingPersegi = hitungBangunDatar.menghitungKelilingPersegi(sisiPersegi);

const panjang = 10;
const lebar = 4;
const luasPersegiPanjang = hitungBangunDatar.menghitungLuasPersegiPanjang(panjang, lebar);
const kelilingPersegiPanjang = hitungBangunDatar.menghitungKelilingPersegiPanjang(panjang, lebar);

// Tampilkan hasil perhitungan
console.log(`PERSEGI`);
console.log(`Luas : ${luasPersegi}`);
console.log(`Keliling : ${kelilingPersegi}\n`);
console.log(`PERSEGI PANJANG`);
console.log(`Luas persegi panjang: ${luasPersegiPanjang}`);
console.log(`Keliling persegi panjang: ${kelilingPersegiPanjang}`);
