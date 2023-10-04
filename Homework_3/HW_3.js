const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


input.question("Masukkan suhu dalam derajat Celsius: ", (inputSuhu) => {
  const suhu = parseFloat(inputSuhu);
  const kondisiAir =
    suhu >= -100 && suhu <= 0 ? "BEKU" 
    : suhu >= 1 && suhu <= 100 ? "CAIR" 
    : suhu >= 101 && suhu <= 500 ? "UAP" 
    : "tidak terdefinisi dalam suhu tersebut!";

  console.log(`Suhu ${suhu} derajat Celsius: Kondisi Air ${kondisiAir}`);

  input.close();
});

// const readline = require("readline");

// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// input.question("Pilih jenis kendaraan\n- plat kuning\n- motor\n- mobil\nJenis kendaraan :", (jenisKendaraan) => {
//   if (jenisKendaraan === "plat kuning" || jenisKendaraan === "motor") {
//     console.log("Jenis BBM: BBM Subsidi");
//     input.close();
//   } else if (jenisKendaraan === "mobil") {
//     input.question("Masukkan CC mobil: ", (ccMobil) => {
//       const cc = parseInt(ccMobil);
//       if (cc < 1500) {
//         console.log("Jenis BBM: PERTAMAX");
//       } else {
//         console.log("Jenis BBM: PERTAMAX Turbo");
//       }
//       input.close();
//     });
//   } else {
//     console.log("Jenis kendaraan tidak valid.");
//     input.close();
//   }
// });


