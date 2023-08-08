const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var name;
rl.question("Masukkan nama Anda:", (answer) => {
  name = answer;
  if (name) {
    var message = `Halo, ${name}! Selamat datang.`;
    console.log(message);
  } else {
    var message = "Halo, tamu! Selamat datang.";
    console.log(message);
  }
  rl.close();
});
