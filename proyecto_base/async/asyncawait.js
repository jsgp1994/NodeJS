async function hola (nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar (nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`${nombre}: BLA BLA`);
            resolve(nombre);
        }, 1000);
    });
}

async function adios (nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Adios ${nombre}`);
            resolve();
        },1000);
    });
}

async function main(){
    let baseName = 'Juan Sebastian';
    let nombre = await hola(baseName);
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
}

main();