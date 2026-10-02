let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = Number(Math.random() * 100);
    numeros.push(numero);
}

console.log("Array de números:");

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let media = 0;

for(let i = 0; i < numeros.length; i++) {
    mayor = Math.max(mayor, numeros[i]);
    menor = Math.min(menor, numeros[i]);
    suma += numeros[i];
	media = suma / numeros.length;
}

console.log("Mayor número: " + mayor);
console.log("Menor número: " + menor);
console.log("Media de los números: " + media);