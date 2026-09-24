"use strict";

const PROMPT = require('prompt-sync')(); // Importa la librería prompt-sync para permitir la entrada de datos por consola

let listaDeLaCompra = [];

while (true) {
    let articulo = PROMPT("Introduce un artículo para la lista de la compra (o pulsa Enter para finalizar): ");

    if (articulo === "") {
        break;
    }

    if (listaDeLaCompra.includes(articulo)) {
        console.log(`El artículo "${articulo}" ya existe en la lista.`);
    } else {
        listaDeLaCompra.push(articulo);
        console.log(`El artículo "${articulo}" ha sido añadido a la lista.`);
    }
}

listaDeLaCompra.sort();

console.log("Lista de la compra:");
for (let i = 0; i < listaDeLaCompra.length; i++) {
    console.log(`- ${listaDeLaCompra[i]}`);
}
