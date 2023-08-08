//legnth
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan sebuah kalimat : ", (inputString) => {
  //  contoh property length
  console.log(`Panjang kalimat :  ${inputString.length}`);
  rl.close();
});