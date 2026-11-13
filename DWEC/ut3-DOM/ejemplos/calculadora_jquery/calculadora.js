// Variables que guardan el estado de la calculadora
let numeroActual = "0";
let numeroAnterior = null;
let operador = null;
let nuevoNumero = false;

// Actualiza el valor que aparece en la pantalla
function actualizarPantalla() {
    $("#pantalla").val(numeroActual);
}

// Reinicia la calculadora
function borrarTodo() {
    numeroActual = "0";
    numeroAnterior = null;
    operador = null;
    nuevoNumero = false;
    actualizarPantalla();
}

// Añade un número o el separador decimal
function escribir(valor) {
    if (numeroActual === "ERROR" || nuevoNumero) {
        numeroActual = "0";
        nuevoNumero = false;
    }

    if (valor === ".") {
        if (!numeroActual.includes(".")) {
            numeroActual += ".";
        }
    } else if (numeroActual === "0") {
        numeroActual = valor;
    } else {
        numeroActual += valor;
    }

    actualizarPantalla();
}

// Guarda la operación que se va a realizar
function guardarOperacion(nuevaOperacion) {
    if (numeroActual === "ERROR") {
        return;
    }

    if (operador !== null && !nuevoNumero) {
        calcular();
    }

    numeroAnterior = Number(numeroActual);
    operador = nuevaOperacion;
    nuevoNumero = true;
}

// Realiza la operación pendiente
function calcular() {
    if (operador === null || numeroAnterior === null) {
        return;
    }

    let segundoNumero = Number(numeroActual);
    let resultado;

    try {
        switch (operador) {
            case "+":
                resultado = numeroAnterior + segundoNumero;
                break;
            case "-":
                resultado = numeroAnterior - segundoNumero;
                break;
            case "*":
                resultado = numeroAnterior * segundoNumero;
                break;
            case "/":
                if (segundoNumero === 0) {
                    throw new Error("No se puede dividir entre cero");
                }
                resultado = numeroAnterior / segundoNumero;
                break;
            default:
                return;
        }

        if (!Number.isFinite(resultado)) {
            throw new Error("Resultado no válido");
        }

        // Evita mostrar demasiados decimales por errores de precisión
        numeroActual = String(Number(resultado.toPrecision(10)));
        numeroAnterior = null;
        operador = null;
        nuevoNumero = true;
        actualizarPantalla();
    } catch (error) {
        numeroActual = "ERROR";
        numeroAnterior = null;
        operador = null;
        nuevoNumero = true;
        actualizarPantalla();
    }
}

// Cambia el signo del número actual
function cambiarSigno() {
    if (numeroActual !== "0" && numeroActual !== "ERROR") {
        numeroActual = String(Number(numeroActual) * -1);
        actualizarPantalla();
    }
}

// Convierte el número actual en porcentaje
function porcentaje() {
    if (numeroActual !== "ERROR") {
        numeroActual = String(Number(numeroActual) / 100);
        actualizarPantalla();
    }
}

// Un único gestor de eventos para todos los botones usando jQuery
$(document).ready(function () {
    $(".teclas").on("click", "button", function () {
        let tecla = $(this).attr("data-tecla");

        if (!isNaN(tecla)) {
            escribir(tecla);
        } else {
            switch (tecla) {
                case ".":
                    escribir(".");
                    break;
                case "AC":
                    borrarTodo();
                    break;
                case "+/-":
                    cambiarSigno();
                    break;
                case "%":
                    porcentaje();
                    break;
                case "=":
                    calcular();
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    guardarOperacion(tecla);
                    break;
            }
        }
    });

    // También permite utilizar los números y operaciones del teclado
    $(document).on("keydown", function (evento) {
        let tecla = evento.key;

        if (tecla >= "0" && tecla <= "9") {
            escribir(tecla);
        } else if (tecla === "." || tecla === ",") {
            escribir(".");
        } else if (["+", "-", "*", "/"].includes(tecla)) {
            guardarOperacion(tecla);
        } else if (tecla === "Enter" || tecla === "=") {
            evento.preventDefault();
            calcular();
        } else if (tecla === "Escape") {
            borrarTodo();
        } else if (tecla === "Backspace") {
            if (numeroActual.length > 1) {
                numeroActual = numeroActual.slice(0, -1);
            } else {
                numeroActual = "0";
            }
            actualizarPantalla();
        }
    });
});
