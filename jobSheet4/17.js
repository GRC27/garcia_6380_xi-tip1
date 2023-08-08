const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//subString
rl.question("Masukkan sebuah kalimat : ", (kalimat) => {
  rl.question("Masukkan indeks awal : ", (startIndex) => {
    rl.question("Masukkan indeks akhir : ", (endIndex) => {
      // Konversi nilai indeks ke tipe Number
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      // Gunakan method substring untuk mengambil substring dari startIndex dengan panjang length
      const substringResult = kalimat.substring(startIndex, endIndex);
      console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult} 
      `);
      rl.close();
    });
  });
});
