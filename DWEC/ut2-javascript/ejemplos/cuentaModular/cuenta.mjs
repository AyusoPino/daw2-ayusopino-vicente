export default class Cuenta {
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = Math.max(0, cantidad);
    }

    get titular() {
        return this._titular;
    }

    set titular(titular) {
        this._titular = titular;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(cantidad) {
        this._cantidad = Math.max(0, cantidad);
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