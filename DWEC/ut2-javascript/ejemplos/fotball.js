'use strict';

const PROMPT = require('prompt-sync')(); // Importa la librería prompt-sync para permitir la entrada de datos por consola

let alineacion = new Map(); // Crea un mapa para almacenar la alineación del equipo, donde la clave es el número del jugador y el valor es su nombre

// Primera parte: Introducción de la configuración del equipo
let condicionSalida = false;
while (!condicionSalida) {
    let numero = PROMPT("Introduce el número del jugador (o pulsa Enter para finalizar): ");
    if (numero === "") {
        condicionSalida = true;
    } else {
        let nombre = PROMPT("Introduce el nombre del jugador: ");
        alineacion.set(numero, nombre);
    }
}

// Segunda parte: Consulta de jugadores por número
let condicionDeSalida = false;

while (!condicionDeSalida) {
    console.log("----------------------------------------------------");
    let numeroConsulta = PROMPT("Introduce el número del jugador a consultar (o pulsa 0 para finalizar): ");
    if (numeroConsulta === "0") {
        condicionDeSalida = true;
    }

    if (alineacion.has(numeroConsulta)) {
        console.log(`El jugador con el número ${numeroConsulta} es ${alineacion.get(numeroConsulta)}.`);
    } else {
        console.log(`No hay ningún jugador con el número ${numeroConsulta}.`);
    } 
}