
class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = Math.max(0, cantidad);
    }

    get titular() {
        return this.titular;
    }

    set titular(titular) {
        this.titular = titular;
    }

    get cantidad() {
        return this.cantidad;
    }

    set cantidad(cantidad) {
        this.cantidad = Math.max(0, cantidad);
    }

    toString() {
        return `Titular: ${this.titular}, cantidad: ${this.cantidad}`;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad) {
        if (cantidad > 0) {
            this.cantidad = Math.max(0, this.cantidad - cantidad);
        }
    }
}

// PRUEBA

let cuenta1 = new Cuenta("Vicente");
let cuenta2 = new Cuenta("Vicente", 100);

console.log(cuenta1.toString());
console.log(cuenta2.toString());

cuenta2.ingresar(10);
console.log("Después de ingresar 10:", cuenta2.getCantidad());

cuenta2.retirar(50);
console.log("Después de retirar 50:", cuenta2.getCantidad());

cuenta2.retirar(100);
console.log("Después de retirar 100:", cuenta2.getCantidad());