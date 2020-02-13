const readline = require('readline')
const fs = require('fs')
let data = fs.readFileSync('./data.json', 'utf8')
let words = JSON.parse(data);
let hasil = 0;
let answer = 1;

if (process.argv[2]) {
  
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan : '
  });
  console.log("Selamat Datang di Permainan Tebak tebak tebakan, Kamu akan di berikan pertanyaan dari file ini 'data.json', untuk bermain, jawablah dengan jawaban yang sesuai")
  console.log("Gunakan 'skip' menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi")
  console.log(`${words[hasil].a}`)
  rl.prompt()
  rl.on('line', (line) => {
    if (line.toLowerCase() === words[hasil].b) {
      console.log(`Anda Beruntung!`);
      hasil++;
      if (hasil == words.length) {
        rl.close()
      } else {
        console.log(`${words[hasil].a}`)
        rl.prompt()
      }
    }
    else if (line == 'skip') {
      words.push(words[hasil])
      hasil++
      console.log(words[hasil].a)
      rl.prompt()
    }
    else {
      console.log(`Anda Kurang Beruntung! anda telah salah ${answer}, silahkan coba lagi`);
      answer++
      console.log(`${words[hasil].a}`)
      rl.prompt()
    }
  })
    .on('close', () => {
      console.log('Hore Anda Menang');
      process.exit(0);
    });
}
else {
  console.log('tolong sertakan nama file sebagai inputan soalnya')
}