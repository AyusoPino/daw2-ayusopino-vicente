"use strict";

import {
    validarObligatorio,
    validarDNI,
    validarEmail,
    validarContrasenas
} from "./formulario-validaciones.mjs";

$(document).ready(function () {

    // Obtener elementos del HTML con jQuery
    let formulario = $("#formulario");
    let mensaje = $("#mensaje");
    let campos = $("#formulario input");

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
        obligatorio: function (campo) {
            return validarObligatorio(campo.val());
        },
        dni: function (campo) {
            return validarDNI(campo.val());
        },
        email: function (campo) {
            return validarEmail(campo.val());
        },
        contrasenas: function (campo) {
            let contrasena1 = $("#contrasena1").val();
            return validarContrasenas(contrasena1, campo.val());
        }
    };

    // Mostrar la ayuda debajo del formulario
    function mostrarAyuda(texto) {
        mensaje.text(texto);
    }

    // Mostrar error y poner el fondo rojo
    function mostrarError(campo, texto) {
        campo.addClass("error");
        mostrarAyuda(texto);
    }

    // Quitar el fondo rojo
    function limpiarError(campo) {
        campo.removeClass("error");
    }

    // Validar un campo
    function validarCampo(campo) {
        let tipo = campo.attr("data-validacion");
        let error = validaciones[tipo](campo);

        if (error !== "") {
            mostrarError(campo, error);
            return false;
        }

        limpiarError(campo);
        return true;
    }

    // Mostrar ayuda al entrar en un campo
    campos.on("focus", function () {
        let campo = $(this);
        if (!campo.hasClass("error")) {
            mostrarAyuda(ayudas[campo.attr("id")] || "");
        }
    });

    // Validar al salir de un campo
    campos.on("blur", function () {
        validarCampo($(this));
    });

    // Quitar el error cuando el usuario empieza a corregir
    campos.on("input", function () {
        let campo = $(this);
        if (campo.hasClass("error")) {
            limpiarError(campo);
            mostrarAyuda(ayudas[campo.attr("id")] || "");
        }
    });

    // Validar todo al pulsar Aceptar
    formulario.on("submit", function (evento) {
        // Este ejercicio solo valida: no hay servidor al que enviar contraseñas
        evento.preventDefault();

        let primerError = null;
        let primerMensaje = "";

        campos.each(function () {
            let campo = $(this);
            if (!validarCampo(campo) && primerError === null) {
                primerError = campo;
                let tipo = campo.attr("data-validacion");
                primerMensaje = validaciones[tipo](campo);
            }
        });

        let contrasena1 = $("#contrasena1");
        let contrasena2 = $("#contrasena2");

        // Si no coinciden, indicar que se repitan desde la primera contraseña
        if (contrasena1.val() !== "" &&
            contrasena2.val() !== "" &&
            contrasena1.val() !== contrasena2.val()) {

            limpiarError(contrasena2);
            primerError = contrasena1;
            primerMensaje = "Las contraseñas no coinciden. Introduce las dos de nuevo.";
            mostrarError(contrasena1, primerMensaje);
        }

        if (primerError !== null) {
            primerError.trigger("focus");
            mostrarError(primerError, primerMensaje);
        } else {
            mostrarAyuda("Formulario válido. Todos los datos son correctos.");
        }
    });

    // Limpiar los mensajes y errores al pulsar Limpiar
    formulario.on("reset", function () {
        campos.removeClass("error");
        mostrarAyuda("");
    });
});
