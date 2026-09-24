// Adivina adivinanza
"use strict";

const PROMPT = require("prompt-sync")();

const INTENTOS_MAXIMOS = 5;
const NUMERO_MAXIMO = 20;

// Generamos los 10 números secretos
let numerosSecretos = [];

for (let i = 0; i < 10; i++) {
    numerosSecretos[i] = Math.floor(Math.random() * (NUMERO_MAXIMO + 1));
}

console.log("Números secretos generados.");

// Pedimos 5 números al usuario
let numerosUsuario = [];

for (let i = 0; i < INTENTOS_MAXIMOS; i++) {
    let numero = Number(
        PROMPT(`Introduce un número entre 0 y ${NUMERO_MAXIMO}: `)
    );

    numerosUsuario[i] = numero;
}

// Comprobamos los aciertos
let aciertos = [];

for (let i = 0; i < numerosUsuario.length; i++) {
    if (numerosSecretos.includes(numerosUsuario[i])) {
        aciertos.push(numerosUsuario[i]);
    }
}

// Mostramos el resultado
console.log(`Has acertado ${aciertos.length} números.`);

if (aciertos.length > 0) {
    console.log(`Los números que has acertado son: ${aciertos.join(", ")}`);
} else {
    console.log("No has acertado ningún número.");
}
