
"use strict";

import { Calculadora } from "./calculadora-clase.mjs";

// Creamos la calculadora
const calculadora = new Calculadora();

// Seleccionamos la pantalla y el contenedor de botones
const pantalla = document.querySelector("#input");
const botones = document.querySelector(".calculadora");

// Actualizamos la pantalla cuando la clase nos avisa
calculadora.setPantallaActualizadaListener((nuevoValor) => {
    pantalla.value = nuevoValor;
});

// Objeto asociativo que relaciona cada botón con su función
const operaciones = {
    "AC": () => calculadora.limpiar(),
    "+/-": () => calculadora.cambiarSigno(),
    "%": () => calculadora.porcentaje(),
    "÷": () => calculadora.seleccionarOperacion("dividir"),
    "x": () => calculadora.seleccionarOperacion("multiplicar"),
    "-": () => calculadora.seleccionarOperacion("restar"),
    "+": () => calculadora.seleccionarOperacion("sumar"),
    "=": () => calculadora.calcular(),
    ",": () => calculadora.agregarComa()
};

// Un único gestor de eventos para todos los botones
botones.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");

    // Comprobamos que se ha pulsado un botón
    if (boton === null || !botones.contains(boton)) {
        return;
    }

    const texto = boton.textContent.trim();

    // Si es un número, lo añadimos a la pantalla
    if (/^[0-9]$/.test(texto)) {
        calculadora.agregarNumero(texto);
        return;
    }

    // Si es una operación, ejecutamos su función
    if (operaciones[texto] !== undefined) {
        operaciones[texto]();
    }
});

// Permite utilizar el teclado
document.addEventListener("keydown", (evento) => {
    // Evitamos que Enter envíe el formulario
    if (evento.key === "Enter") {
        evento.preventDefault();
    }

    if (/^[0-9]$/.test(evento.key)) {
        calculadora.agregarNumero(evento.key);
    } else if (evento.key === "," || evento.key === ".") {
        calculadora.agregarComa();
    } else if (evento.key === "+") {
        calculadora.seleccionarOperacion("sumar");
    } else if (evento.key === "-") {
        calculadora.seleccionarOperacion("restar");
    } else if (evento.key === "*") {
        calculadora.seleccionarOperacion("multiplicar");
    } else if (evento.key === "/") {
        calculadora.seleccionarOperacion("dividir");
    } else if (evento.key === "Enter" || evento.key === "=") {
        calculadora.calcular();
    } else if (evento.key === "Escape") {
        calculadora.limpiar();
    } else if (evento.key === "%") {
        calculadora.porcentaje();
    } else if (evento.key === "Backspace") {
        calculadora.limpiar();
    }
});