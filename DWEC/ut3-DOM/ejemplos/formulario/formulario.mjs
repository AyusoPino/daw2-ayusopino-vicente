"use strict";

import {
    validarObligatorio,
    validarDNI,
    validarEmail,
    validarContrasenas
} from "./formulario-validaciones.mjs";

// Obtener elementos del HTML
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let campos = document.querySelectorAll("#formulario input");

// Array asociativo con las ayudas
let ayudas = {
    nombre: "Introduce tu nombre.",
    apellidos: "Introduce tus apellidos.",
    dni: "Introduce tu DNI con su letra.",
    email: "Introduce tu correo electrónico.",
    contrasena1: "Introduce una contraseña.",
    contrasena2: "Escribe de nuevo la misma contraseña."
};

// Array asociativo con las validaciones
let validaciones = {
    obligatorio: function(campo) {
        return validarObligatorio(campo.value);
    },

    dni: function(campo) {
        return validarDNI(campo.value);
    },

    email: function(campo) {
        return validarEmail(campo.value);
    },

    contrasenas: function(campo) {
        let contrasena1 = document.getElementById("contrasena1").value;

        return validarContrasenas(contrasena1, campo.value);
    }
};

// Mostrar ayuda
function mostrarAyuda(texto) {
    mensaje.textContent = texto;
}

// Mostrar error
function mostrarError(campo, texto) {
    campo.classList.add("error");
    mostrarAyuda(texto);
}

// Limpiar error
function limpiarError(campo) {
    campo.classList.remove("error");
} 

// Validar un campo
function validarCampo(campo) {
    let tipo = campo.dataset.validacion;
    let error = validaciones[tipo](campo);

    if (error != "") {
        mostrarError(campo, error);
        return false;
    }

    limpiarError(campo);
    return true;
}

// Eventos de los campos
campos.forEach(function(campo) {

    // Mostrar ayuda al entrar en el campo
    campo.addEventListener("focus", function() {
        if (!campo.classList.contains("error")) {
            mostrarAyuda(ayudas[campo.id] || "");
        }
    });

    // Validar al salir del campo
    campo.addEventListener("blur", function() {
        validarCampo(campo);
    });

    // Quitar el error cuando se empieza a corregir
    campo.addEventListener("input", function() {
        if (campo.classList.contains("error")) {
            limpiarError(campo);
            mostrarAyuda(ayudas[campo.id] || "");
        }
    });

});

// Validar el formulario al pulsar Aceptar
formulario.addEventListener("submit", function(evento) {

    let primerError = null;

    // Validar todos los campos
    campos.forEach(function(campo) {
        if (!validarCampo(campo) && primerError == null) {
            primerError = campo;
        }
    });

    // Si las contraseñas no coinciden, marcar la primera
    let contrasena1 = document.getElementById("contrasena1");
    let contrasena2 = document.getElementById("contrasena2");

    if (contrasena1.value != "" &&
        contrasena2.value != "" &&
        contrasena1.value != contrasena2.value) {

        limpiarError(contrasena2);

        mostrarError(
            contrasena1,
            "Las contraseñas no coinciden. Introduce las dos de nuevo."
        );

        primerError = contrasena1;
    }

    // Si hay errores, no enviar el formulario
    if (primerError != null) {
        evento.preventDefault();
        primerError.focus();
        validarCampo(primerError);
    }

});

// Limpiar errores al restablecer el formulario
formulario.addEventListener("reset", function() {

    campos.forEach(function(campo) {
        limpiarError(campo);
    });

    mostrarAyuda("");

});