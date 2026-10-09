
"use strict";

export class Calculadora {
    constructor() {
        this.pantalla = "0";
        this.numeroAnterior = null;
        this.operador = null;
        this.nuevoNumero = true;
        this.listener = null;
    }

    // Registra la función que actualizará la pantalla
    setPantallaActualizadaListener(funcion) {
        this.listener = funcion;
    }

    // Avisa de que el valor de la pantalla ha cambiado
    actualizarPantalla() {
        if (this.listener !== null) {
            this.listener(this.pantalla);
        }
    }

    // Añade un número a la pantalla
    agregarNumero(numero) {
        if (this.pantalla === "ERROR" || this.nuevoNumero) {
            this.pantalla = numero;
            this.nuevoNumero = false;
        } else if (this.pantalla.length < 12) {
            this.pantalla += numero;
        }

        this.actualizarPantalla();
    }

    // Añade la coma decimal
    agregarComa() {
        if (this.pantalla === "ERROR" || this.nuevoNumero) {
            this.pantalla = "0,";
            this.nuevoNumero = false;
        } else if (!this.pantalla.includes(",")) {
            this.pantalla += ",";
        }

        this.actualizarPantalla();
    }

    // Convierte el contenido de la pantalla en un número
    obtenerNumero() {
        return Number(this.pantalla.replace(",", "."));
    }

    // Borra la calculadora
    limpiar() {
        this.pantalla = "0";
        this.numeroAnterior = null;
        this.operador = null;
        this.nuevoNumero = true;

        this.actualizarPantalla();
    }

    // Cambia el signo del número
    cambiarSigno() {
        if (this.pantalla === "ERROR") {
            this.limpiar();
            return;
        }

        if (this.pantalla !== "0") {
            if (this.pantalla.startsWith("-")) {
                this.pantalla = this.pantalla.substring(1);
            } else {
                this.pantalla = "-" + this.pantalla;
            }
        }

        this.actualizarPantalla();
    }

    // Calcula el porcentaje
    porcentaje() {
        if (this.pantalla === "ERROR") {
            return;
        }

        this.pantalla = String(this.obtenerNumero() / 100)
            .replace(".", ",");
        this.nuevoNumero = true;

        this.actualizarPantalla();
    }

    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }

        return a / b;
    }

    // Guarda el operador seleccionado
    seleccionarOperacion(operador) {
        if (this.pantalla === "ERROR") {
            this.limpiar();
            return;
        }

        if (this.operador !== null && !this.nuevoNumero) {
            this.calcular();
        }

        this.numeroAnterior = this.obtenerNumero();
        this.operador = operador;
        this.nuevoNumero = true;
    }

    // Realiza la operación pendiente
    calcular() {
        if (this.operador === null || this.numeroAnterior === null) {
            return;
        }

        try {
            const numeroActual = this.obtenerNumero();
            let resultado;

            switch (this.operador) {
                case "sumar":
                    resultado = this.sumar(
                        this.numeroAnterior, numeroActual
                    );
                    break;

                case "restar":
                    resultado = this.restar(
                        this.numeroAnterior, numeroActual
                    );
                    break;

                case "multiplicar":
                    resultado = this.multiplicar(
                        this.numeroAnterior, numeroActual
                    );
                    break;

                case "dividir":
                    resultado = this.dividir(
                        this.numeroAnterior, numeroActual
                    );
                    break;
            }

            if (!Number.isFinite(resultado)) {
                throw new Error("Resultado no válido");
            }

            // Limita los decimales del resultado
            resultado = Number(resultado.toPrecision(10));

            this.pantalla = String(resultado).replace(".", ",");
            this.numeroAnterior = null;
            this.operador = null;
            this.nuevoNumero = true;

        } catch (error) {
            this.pantalla = "ERROR";
            this.numeroAnterior = null;
            this.operador = null;
            this.nuevoNumero = true;
        }

        this.actualizarPantalla();
    }
}