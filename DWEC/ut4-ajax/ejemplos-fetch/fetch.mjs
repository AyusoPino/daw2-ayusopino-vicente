import * as http from './http.mjs';

const botonEnviar = document.getElementById('enviar');
const inputUrl = document.getElementById('url');
const inputMetodo = document.getElementById('metodo');
const peticion = document.getElementById('peticion');
const respuesta = document.getElementById('respuesta');

window.addEventListener('load', () => {
    botonEnviar.addEventListener('click', onEnviarClick);
});

function onEnviarClick(event) {
    event.preventDefault();

    switch (inputMetodo.value) {
        case 'GET':
            get();
            break;
        case 'POST':
            post();
            break;
        case 'PUT':
            put();
            break;
        case 'DELETE':
            del();
            break;
    }
}

function get() {
    const url = inputUrl.value;

    http.get(url)
        .then(response => response.text())
        .then(texto => {
            respuesta.value = texto;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function post() {
    const url = inputUrl.value;
    const cuerpo = peticion.value;

    http.post(url, cuerpo)
        .then(response => response.text())
        .then(texto => {
            respuesta.value = texto;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function put() {
    const url = inputUrl.value;
    const cuerpo = peticion.value;

    http.put(url, cuerpo)
        .then(response => response.text())
        .then(texto => {
            respuesta.value = texto;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function del() {
    const url = inputUrl.value;

    http.del(url)
        .then(response => response.text())
        .then(texto => {
            respuesta.value = texto;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

