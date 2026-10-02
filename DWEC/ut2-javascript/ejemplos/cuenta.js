class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = Math.max(0, cantidad);
    }

    getTitular() {
        return this.titular;
    }

    setTitular(titular) {
        this.titular = titular;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
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
        if (cantidad > 0) 
            this.cantidad = Math.max(0, this.cantidad - cantidad);
    }
}


// PRUEBA

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