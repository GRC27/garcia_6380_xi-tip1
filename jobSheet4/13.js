const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//indexOf
rl.question("Masukkan sebuah kalimat : ", (kalimat) => {
  rl.question("Masukkan kata yang ingin anda cari : ", (kataCari) => {
    // Gunakan method indexOf untuk mencari kataCari dalam kalimat
    const indeksKata = kalimat.indexOf(kataCari);
    if (indeksKata !== -1) {
      console.log(`kata '${kataCari}' ditemukan pada indeks : ${indeksKata}`);
    } else {
      console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat. `);
    }
    rl.close();
  });
});
