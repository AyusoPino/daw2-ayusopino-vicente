import Cuenta from './cuenta.mjs';

let cuenta = new Cuenta("Vicente", 100);
console.log("Saldo inicial:", cuenta.getCantidad());

cuenta.ingresar(10);
console.log("Después de ingresar 10:", cuenta.getCantidad());

cuenta.retirar(50);
console.log("Después de retirar 50:", cuenta.getCantidad());

cuenta.ingresar(15);
console.log("Después de ingresar 15:", cuenta.getCantidad());

cuenta.retirar(100);
console.log("Después de retirar 100:", cuenta.getCantidad());