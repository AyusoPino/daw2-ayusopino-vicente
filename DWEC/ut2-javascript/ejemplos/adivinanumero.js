
"use strict";

const PROMPT = require('prompt-sync')(); // Importa la librería prompt-sync para permitir la entrada de datos por consola
const INTENTOS_MAXIMOS = 5;  // Número máximo de intentos permitidos
const NUMERO_MAXIMO = 10; // Número máximo que el usuario puede adivinar (0 a NUMERO_MAXIMO)

let numeroSecreto = Math.floor(Math.random() * NUMERO_MAXIMO); // Genera un número aleatorio entre 0 y NUMERO_MAXIMO
let intentos = 0; // Contador de intentos realizados
let acertado = false; 


while (intentos < INTENTOS_MAXIMOS && !acertado) { // Bucle que se ejecuta mientras el usuario no haya adivinado el número y no haya superado el número máximo de intentos
    let numeroUsuario = Number(PROMPT(`Adivina el número (entre 0 y ${NUMERO_MAXIMO}). Intento ${intentos + 1} de ${INTENTOS_MAXIMOS}:`));
    intentos++;

    if (numeroUsuario === numeroSecreto) { 
        console.log(`¡Felicidades! Has adivinado el número secreto ${numeroSecreto} en ${intentos} intentos.`);
        acertado = true;
    } 
    
    if (numeroUsuario < numeroSecreto) { 
        console.log("El número secreto es mayor. Intenta de nuevo.");
    } 
    
    else if (numeroUsuario > numeroSecreto) { 
        console.log("El número secreto es menor. Intenta de nuevo.");
    } 

    else {
        console.log("Por favor, introduce un número válido.");
    }
}
