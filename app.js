let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento( elemento, texto) {
    
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);       
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto < numeroUsuario) {
        asignarTextoElemento('P', ' EL NUMERO SECRETO ES MENOR');
    }
        else {
        asignarTextoElemento('p', ' EL NUMERO SECRETO ES MAYOR');
        }
    
    intentos++;
    limpiarCaja();}
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;


    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo ){
            asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
    // si el numero generado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del a al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}

function reiniciarJuego() {
    // limpiar la caja

    limpiarCaja();
    // indicar mensaje de inicio
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();    
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 

}
condicionesIniciales();



