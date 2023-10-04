// Array berisi 100 nilai random
const randomArr = [];
for (let i = 0; i < 100; i++) {
  const value = Math.floor(Math.random() * 50) + 1;
  randomArr.push(value);
}

// Membuat array dengan index genap dan ganjil
const evenIndex = [];
const oddIndex = [];

for (let i = 0; i < randomArr.length; i++) {
  if (i % 2 === 0) {
    evenIndex.push(randomArr[i]);
  } else {
    oddIndex.push(randomArr[i]);
  }
}
/* 
Perulangan for disini memiliki kondisi 
  "untuk variabel i bertipe let dengan nilai sama dengan 0 hingga kurang dari panjang array randomArr, 
  lakukan perulangan dengan menambahkan nilai i dengan 1 setiap perulangan. 
  Jika nilai i dibagi 2 sama dengan 0, maka masukkan nilai randomArr dengan index i ke dalam array evenIndex. 
  Jika tidak, maka masukkan nilai randomArr dengan index i ke dalam array oddIndex. "
*/

// Menghitung Min, Max, Total, dan Rata-rata
function Operation(arr) {
  let min = arr[0];
  let max = arr[0];
  let total = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    total += arr[i];
  }

  const average = total / arr.length;
  return { min, max, total, average };
}

/* Fungsi Operation memiliki parameter arr.didalamnya memiliki variabel min, max, dan total dengan nilai sama dengan arr index 0 yang merupakan nilai default dari variabel tersebut
Sehingga dapat saat perulangan untuk mencari nilai min max dari setiap array dapat ditetapkan perulangan dimulai dari index ke-0 atau dari awal,dengan kondisi pada perulangan "variabel i =1 hingga kurang dari panjang array arr, 
lakukan perulangan dengan menambahkan nilai i dengan 1 setiap perulangan. 
Jika nilai arr index i lebih kecil dari nilai min, maka nilai min sama dengan nilai arr index i. 
Jika nilai arr index i lebih besar dari nilai max, maka nilai max sama dengan nilai arr index i. hingga didapatkan salah satu nilai max dan min dari kedua array tersebut.
Nilai total sama dengan nilai total ditambah nilai di dalam i . "
*/ 

// Memanggil fungsi Operation untuk mendapatkan array index ganjil  dan genap
const evenIndexArr = Operation(evenIndex);
const oddIndexArr = Operation(oddIndex);

// Menampilkan output
console.log("Array berisi 100 nilai random:", randomArr);
console.log("Array berisi 50 nilai Index GENAP:", evenIndex);
console.log("Array berisi 50 nilai Index GANJIL:", oddIndex);

console.log("\nMin, Max, Total, Rata-rata pada array genap:");
console.log("Min:", evenIndexArr.min);
console.log("Max:", evenIndexArr.max);
console.log("Total:", evenIndexArr.total);
console.log("Rata-rata:", evenIndexArr.average);

console.log("\nMin, Max, Total, Rata-rata pada array ganjil:");
console.log("Min:", oddIndexArr.min);
console.log("Max:", oddIndexArr.max);
console.log("Total:", oddIndexArr.total);
console.log("Rata-rata:", oddIndexArr.average);

// Membandingkan nilai min, max, total, dan rata-rata dari kedua array
if (evenIndexArr.min > oddIndexArr.min) {
  console.log("\nNilai Min lebih besar di array GENAP");
} else if (evenIndexArr.min < oddIndexArr.min) {
  console.log("\nNilai Min lebih besar di array GANJIL");
} else {
  console.log("\nNilai Min antara array GENAP dan GANJIL Sama");
}

if (evenIndexArr.max > oddIndexArr.max) {
  console.log("Nilai Max lebih besar di array GENAP");
} else if (evenIndexArr.max < oddIndexArr.max) {
  console.log("Nilai Max lebih besar di array GANJIL");
} else {
  console.log("Nilai Max antara array GENAP dan GANJIL Sama");
}

if (evenIndexArr.total > oddIndexArr.total) {
  console.log("Total nilai Array lebih besar di Array GENAP");
} else if (evenIndexArr.total < oddIndexArr.total) {
  console.log("Total nilai Array lebih besar di array GANJIL");
} else {
  console.log("Total nilai antara array GENAP dan GANJIL Sama");
}

if (evenIndexArr.average > oddIndexArr.average) {
  console.log("Rata-rata Array lebih besar di array GENAP");
} else if (evenIndexArr.average < oddIndexArr.average) {
  console.log("Rata-rata Array lebih besar di array GANJIL");
} else {
  console.log("Rata-rata nilai antara array GENAP dan GANJIL Sama");
}

