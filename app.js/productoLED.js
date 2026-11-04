class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.sig = null;
        this.ant = null;
    }
    infoHTML(){
        return `<p>${this.codigo}  ${this.nombre}  ${this.cantidad}  ${this.costo}</p>`;
    }
}

