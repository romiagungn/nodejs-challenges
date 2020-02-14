const readline = require('readline')
const fs = require('fs')
const readData = () => JSON.parse(fs.readFileSync('data.json', 'utf8'))
let data = readData();
let number = process.argv[3] - 1;
const write = (data) => fs.writeFileSync('data.json', JSON.stringify(data, null, 3), 'utf8');

const help = () => console.log(
    `>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
$ node todo.js list:outstanding asc|desc
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
            'tag': []
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
        data.forEach((item, index) => {
            console.log(`${index + 1}. [${item.tag}] ${item.task} `)
        })
        break;
    case 'complete':
        data[number].complete = true;
        data[number].tag = 'x';
        console.log(`"${data[number].task}" telah selesai`)
        write(data);
        break;
    case 'uncomplete':
        data[number].complete = false;
        data[number].tag = [ ]
        console.log(`"${data[number].task}" status selesai di batalkan`)
        write(data);
        break;
    case 'list:outstanding':
        // console.log(process.argv[3])
            if (process.argv[3] === 'desc'){
                for (let i = data.length - 1 ; i >= 0; i--){
                    if(data[i].complete === false){
                            console.log(`${i+1}. [${data[i].tag}] ${data[i].task}` )
                    }
                }
            } else if (process.argv[3] === 'asc'){
                for(let j = 0; j < data.length; j++ ){
                    if(data[j].complete === false){
                        console.log(`${j+1}. [${data[j].tag}] ${data[j].task}`)
                    }
                }
            }
    break;
    case 'list:completed':
            if (process.argv[3] === 'desc'){
                for(let i = data.length -1; i >=0; i--){
                    if(data[i].complete === true){
                        console.log(`${i+1}. [${data[i].tag}] ${data[i].task}`)
                    }
                }
            } else if (process.argv[3] === 'asc'){
                for (let j = 0; j < data.length; j++){
                    if(data[j].complete === true){
                        console.log(`${j+1}. [${data[j].tag}] ${data[j].task}`)
                    }
                }
            }
    break;
    default:
        help();  
    break;
}

