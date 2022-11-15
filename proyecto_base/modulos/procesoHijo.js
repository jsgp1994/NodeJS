const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
    }else{
        console.log(stdout);
    }
});


let proceso = spawn('ls', ['-la']);

proceso.stdout.on('data', (dato) => {
    console.log(dato.toString());
});


proceso.on('exit', () => {
    console.log('Termino el proceso');
});