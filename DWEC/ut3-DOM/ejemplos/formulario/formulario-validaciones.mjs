"use strict";

// Comprobar que un campo no está vacío
export function validarObligatorio(valor) {
    if (valor.trim() == "") {
        return "Este campo es obligatorio.";
    }

    return "";
}

// Comprobar el DNI
export function validarDNI(valor) {
    let dni = valor.trim().toUpperCase();

    if (!/^[0-9]{8}[A-Z]$/.test(dni)) {
        return "El DNI debe tener 8 números y una letra.";
    }

    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let numero = Number(dni.substring(0, 8));
    let letra = dni.charAt(8);

    if (letras[numero % 23] != letra) {
        return "La letra del DNI no es correcta.";
    }

    return "";
}

// Comprobar el email
export function validarEmail(valor) {
    if (!valor.includes("@")) {
        return "El email debe contener una arroba.";
    }

    return "";
}

// Comprobar que las contraseñas son iguales
export function validarContrasenas(contrasena1, contrasena2) {
    if (contrasena1 == "" || contrasena2 == "") {
        return "Las dos contraseñas son obligatorias.";
    }

    if (contrasena1 != contrasena2) {
        return "Las contraseñas no coinciden.";
    }

    return "";
}