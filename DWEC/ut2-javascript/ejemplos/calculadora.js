// js0402 - Calculadora I

const prompt = require("prompt-sync")();

let pantalla = 0;
let memoria = 0;
let salida = false;


// OPERACIONES CON DOS OPERANDOS

function sumar(numero) {
    pantalla = pantalla + numero;
}

function restar(numero) {
    pantalla = pantalla - numero;
}

function multiplicar(numero) {
    pantalla = pantalla * numero;
}

function dividir(numero) {
    pantalla = pantalla / numero;
}

function resto(numero) {
    pantalla = pantalla % numero;
}

function elevar(numero) {
    pantalla = pantalla ** numero;
}


// FACTORIAL

function factorial() {

    let resultado = 1;

    for (let i = 1; i <= pantalla; i++) {
        resultado = resultado * i;
    }

    pantalla = resultado;
}


// MEMORIA
 
function guardarMemoria() {
    memoria = pantalla;
}

function recuperarMemoria() {
    pantalla = memoria;
}

function borrar() {
    pantalla = 0;
    memoria = 0;
}


// PROGRAMA

function programa() {

    let operacion = prompt("Introduce la operación que deseas realizar: ");

    switch (operacion) {

        case "+":
            let operando1 = Number(prompt("Introduce el número: "));
            sumar(operando1);
            break;

        case "-":
            let operando2 = Number(prompt("Introduce el número: "));
            restar(operando2);
            break;

        case "*":
            let operando3 = Number(prompt("Introduce el número: "));
            multiplicar(operando3);
            break;

        case "/":
            let operando4 = Number(prompt("Introduce el número: "));
            dividir(operando4);
            break;

        case "%":
            let operando5 = Number(prompt("Introduce el número: "));
            resto(operando5);
            break;

        case "^":
            let operando6 = Number(prompt("Introduce el exponente: "));
            elevar(operando6);
            break;

        case "F":
            factorial();
            break;

        case "M":
            guardarMemoria();
            console.log("Memoria guardada.");
            break;

        case "R":
            recuperarMemoria();
            console.log("Memoria recuperada.");
            break;

        case "C":
            borrar();
            console.log("Pantalla y memoria borradas.");
            break;

        case "S":
            salida = true;
            break;

        default:
            console.log("Operación no válida.");
    }
}

// MENÚ PRINCIPAL

function menu() {

    while (salida == false) {

        console.log("\n-----CALCULADORA-----");
        console.log("Pantalla:", pantalla);
        console.log("+  -> Sumar");
        console.log("-  -> Restar");
        console.log("*  -> Multiplicar");
        console.log("/  -> Dividir");
        console.log("%  -> Resto");
        console.log("F  -> Factorial");
        console.log("^  -> Elevar");
        console.log("M  -> Guardar en memoria");
        console.log("R  -> Recuperar memoria");
        console.log("C  -> Borrar pantalla y memoria");
        console.log("S  -> Salir");

        programa();
    }
}

// INICIAR PROGRAMA

menu();