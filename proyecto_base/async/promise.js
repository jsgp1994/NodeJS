function hola (nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
}

function hablar (nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`${nombre}: BLA BLA`);
            resolve(nombre);
        }, 1000);
    });
}

function adios (nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Adios ${nombre}`);
            resolve();
        },1000);
    });
}

let nombre = 'Juan Sebastian Gaviria';
console.log('Iniciando el proceso');


hola(nombre)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch( error => {
        console.log('Hubo un error');
    });