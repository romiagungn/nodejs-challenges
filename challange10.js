/*Challange 10
1. step 1 tinggal kasi return di join
*/function stringManipulation(word) {
  var vokal = 'a, i, u, e, o';
  var newWord;

  if (vokal.includes(word[0])) {
    return word;
  } else {
    newWord = word.slice(1, word.length).concat(word[0] + 'nyo')
    return newWord;
  }
}
function sentenceManipulation(sentence) {
  var word = sentence.split(" ");
  var a = [];

  for (let i = 0; i < word.length; i++) {
    a.push(stringManipulation(word[i]));
  } return a.join(" ");


}



const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tuliskan Kalimat mu disini ? '
});
rl.prompt();
rl.on('line', (answer) => {

  console.log(`hasil konversi : '${sentenceManipulation(answer)}'`);

  rl.prompt();
}).on('close', () => {
  console.log('sampai jumpa lagi');
  process.exit(0);
});