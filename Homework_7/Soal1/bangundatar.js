// luas persegi
function menghitungLuasPersegi(sisi) {
  return sisi * sisi;
}

// keliling persegi
function menghitungKelilingPersegi(sisi) {
  return 4 * sisi;
}

// luas persegi panjang
function menghitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// keliling persegi panjang
function menghitungKelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

// Ekspor fungsi-fungsi 
module.exports = {
  menghitungLuasPersegi,
  menghitungKelilingPersegi,
  menghitungLuasPersegiPanjang,
  menghitungKelilingPersegiPanjang,
};

  