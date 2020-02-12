const fs = require('fs')
let data = fs.readFileSync('./data.json', 'utf8')
let words = JSON.parse(data);
let hasil = 0;
//console.log(words);
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan : '
});
console.log('Selamat Datang di Permainan Tebak Kata, Silahkan isi dengan Jawaban yang Benar ya!')
console.log(`${words[hasil].a}`);
rl.prompt()
rl.on('line', (answer) => {
    if (answer.toLowerCase() === words[hasil].b) {
        console.log(`Selamat anda benar :)`);
        hasil++;
        if (hasil == words.length) {
            rl.close()    
        } 
        else {
            console.log(`${words[hasil].a}`)
            rl.prompt()
        }
    }
    else {
        console.log(`wkwkwkwk anda kurang beruntung`);
        rl.prompt()
    }
})
.on('close', () => {
    console.log('Hore Anda Menang');
    process.exit(0);
});