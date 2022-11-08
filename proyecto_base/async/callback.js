function hola (nombre, miCallBack) {
    setTimeout(() => {
        console.log("Hola " + nombre);
        miCallBack(nombre);
    }, 1000);
}

function hablar (callBackHablar) {
    setTimeout(() => {
        console.log("bla bla bla ...");
        callBackHablar();
    }, 1000);
}

function adios (nombre, otroCallback) {
    setTimeout(() => {
        console.log("Adios " + nombre);
        otroCallback();
    }, 1000);
}


// Funcion recursiva
function conversacion(nombre, veces, callBack){
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callBack);
        });
    }else{
        adios(nombre, callBack);
    }
}

let nombre = "Juan";
let num_attempts = 3;

hola(nombre, function (nombre) {
    conversacion(nombre,num_attempts, function () {
        console.log("proceso terminado");
    });
});