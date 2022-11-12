const fileSystem = require('./file_system');

const path = './archivo.txt';
const contenido = `Hola \nnueva linea`;

main();

async function main(){
    await fileSystem.escribir(path, contenido);
    const data = await fileSystem.leer(path);
    console.log(data);
    await esperar(path);
}

async function esperar (path) {
    setTimeout( () => {
        fileSystem.borrar(path);
        console.log("Se elimino el archivo temporal con exito");
    }, 3000);
}