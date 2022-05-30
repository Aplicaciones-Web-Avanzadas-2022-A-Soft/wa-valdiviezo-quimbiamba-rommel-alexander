
const fs = require('fs');
const path='./file.txt';

function read(path){
    return new Promise(
        (
            resolve,
            reject
        ) => {
            console.log("Reading file....")
            fs.readFile(
                path,
                'utf-8',
                (err, content) => {
                    if(err){
                        console.error(err);
                        reject(err)
                    }else{
                        console.log(content)
                        resolve(content);
                    }
                }
            );
        }
    )
}

function write(path,content){
    return new Promise(
        () => {
            console.log("Writing file....")
            if (content.indexOf("\n")!=-1){
                content = "\n" + content
                console.log(content)
            }
            fs.writeFile(path, content, {flag:'a+'} , err => {
                console.error(err)
            })
        }
    )
}

console.log("Read/Write")

read(path).then((response) =>{
    write(path, response).then(r => console.log(r))
})