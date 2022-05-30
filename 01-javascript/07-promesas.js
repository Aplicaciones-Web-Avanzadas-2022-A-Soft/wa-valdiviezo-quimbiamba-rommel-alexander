
const fs = require('fs');

function promesaElevarAlCuadrado(numero){
    const miPromesa = new Promise( // Definición de la promesa
        (resolve,reject) => {
            const numeroElevadoAlcuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlcuadrado); // return numeroElevadoAlCuadrado
        }
    );
    return miPromesa
}

/** EJERCICIO **/

/**
Hacer una funcion que me acepte como parametro una variable
con el path del primer archivo, el path del segundo archivo
y el path del nuevo archivo.
Vamos a crear dos funciones una promesaLectura Y una promesaEscritura
promesaLectura va a aceptar el path de lectura
promesaEscritura va a aceptar path nuevo archivo y el contenido

- Promesa de lectura
- Promesa de escritura

 **/

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
            fs.writeFile(path, content, {flag:'a+'} , err => {
                console.error(err)
            })
        }
    )
}

function readAndWrite(inputPath1, inputPath2, outputPath){
    return read(inputPath1).then((result) => {
        let content1 = result
        read(inputPath2).then((result2) => {
            let newContent = content1 + "\n" + result2
            write(outputPath,newContent).then(r => console.log(r))
        })

    })
}

const input1=  './input1.txt';
const input2=  './input2.txt';
const output= './output.txt';

readAndWrite(input1, input2, output)
