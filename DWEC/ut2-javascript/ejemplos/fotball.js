/*js0306. Football Manager

Vamos a crear un programa que permita gestionar las alineaciones de un equipo de fútbol. Para ello, vamos a tener dos partes:

    Primera. Donde se va a introducir la configuración del equipo. Se van a pedir los pares número, nombre de los jugadores del equipo hasta introducir una cadena vacía.
    Segunda. Donde se va a poder consultar. Se va a pedir que se introduzca el número y se va a mostrar el jugador que lo tiene. Esto se va a hacer hasta que se introduzca un cero.
*/
'use strict';

const PROMPT = require('prompt-sync')(); // Importa la librería prompt-sync para permitir la entrada de datos por consola

let alineacion = {};

// Primera parte: Introducción de la configuración del equipoç
while (true) {
    let numero = PROMPT("Introduce el número del jugador (o pulsa Enter para finalizar): ");
    if (numero === "") {
        break;
    }

    let nombre = PROMPT("Introduce el nombre del jugador: ");
    alineacion[numero] = nombre;
}

// Segunda parte: Consulta de jugadores por número
while (true) {
    console.log("----------------------------------------------------");
    let numeroConsulta = PROMPT("Introduce el número del jugador a consultar (o pulsa 0 para finalizar): ");
    if (numeroConsulta === "0") {
        break;
    }

    if (alineacion[numeroConsulta]) {
        console.log(`El jugador con el número ${numeroConsulta} es ${alineacion[numeroConsulta]}.`);
    } else {
        console.log(`No hay ningún jugador con el número ${numeroConsulta}.`);
    } 
}