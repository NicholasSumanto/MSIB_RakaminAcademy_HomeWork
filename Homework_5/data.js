let pendaftar = []; // Array kosong untuk menampung data pendaftar

function inputValidation() {
  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uangsangu = parseInt(document.getElementById("uangsangu").value);

  if (nama.length < 10) {
    alert("Nama harus minimal 10 karakter.");
    return false;
  }

  if (umur < 25) {
    alert("Umur harus minimal 25 tahun.");
    return false;
  }

  if (uangsangu < 100000 || uangsangu > 1000000) {
    alert("Uang saku harus antara 100 ribu dan 1 juta.");
    return false;
  }

  // Jika semua kondisi di atas terpenuhi makan akan di tambahkan ke dalam array kosong "pendaftar"
  pendaftar.push({ nama, umur, uangsangu });

  // Reset form
  document.getElementById("registrationForm").reset();

  // Menampilkan data pendaftar
  displayPendaftar();

  return false;
}

function displayPendaftar() {
  const pendaftarTable = document.getElementById("pendaftarTable");
  pendaftarTable.innerHTML = "";

  let totalUangSangu = 0;
  let totalUmur = 0;

  for (const p of pendaftar) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${p.nama}</td><td>${p.umur}</td><td>${p.uangsangu}</td><td><button onclick="hapusDaftar('${p.nama}')">Hapus</button></td>`;
    pendaftarTable.appendChild(row);

    totalUangSangu += p.uangsangu;
    totalUmur += p.umur;
  }

  const rataRataUangSangu = totalUangSangu / pendaftar.length;
  const rataRataUmur = totalUmur / pendaftar.length;

  document.getElementById("rataRataUangSangu").textContent =
    rataRataUangSangu.toFixed(2);
  document.getElementById("rataRataUmur").textContent = rataRataUmur.toFixed(2);
}

function hapusDaftar(nama) {
  for (let i = 0; i < pendaftar.length; i++) {
    if (pendaftar[i].nama === nama) {
      pendaftar.splice(i, 1);
      break;
    }
  }

  displayPendaftar();
}
