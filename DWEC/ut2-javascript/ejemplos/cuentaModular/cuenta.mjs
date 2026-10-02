export default class Cuenta {
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