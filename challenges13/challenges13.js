const readline = require('readline')
const fs = require('fs')
const readData = () => JSON.parse(fs.readFileSync('data.json', 'utf8'))
let data = readData();
let number = process.argv[3] - 1;
const write = (data) => fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf8');

const help = console.log(
    `>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_dataing asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> .... <tag_name_N>
$ node todo.js filter:<tag_name> 
`);

switch (process.argv[2]) {
    case 'add':
        const output = process.argv.slice(3).join(' ');
        data.push({
            'task': output,
            'complete': false,
            'tag': [ ]
        });
        write(data);
        console.log(`${output} telah ditambahkan`)
        break;
    case 'delete':
        console.log(`${data[number].task} telah dihapus di daftar`)
        data.splice(number, 1);
        write(data);
        break;
    case 'list':
        console.log(`Daftar Pekerjaan`)
        data.forEach((item, index)=> {
            console.log(`${index+1}. [${item.tag}] ${item.task} `)
        })
        break;
    // case 'help':
    //     help;  
    //     write(data);  
    // break;
    case 'complete':
        data[number].complete = true;
        data[number].tag = 'x';
    write(data);
    break;
}

