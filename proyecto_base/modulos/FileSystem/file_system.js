const fs = require('fs').promises;

async function escribir (path, contenido) {
    try {
        await fs.writeFile(path, contenido);
    } catch (error) {
        console.error(error);
    }
}

async function leer (path){
    try {
        let data = await fs.readFile(path);
        return data.toString();
    } catch (error) {
        console.error(error);
    }
}

async function borrar (path) {
    try {
        fs.unlink(path);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    escribir,
    leer,
    borrar
};