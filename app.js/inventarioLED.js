class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero === null) {
            this.primero = nuevo;
            return true;
        }

        if (nuevo.codigo < this.primero.codigo) {
            nuevo.sig = this.primero;
            this.primero.ant = nuevo;
            this.primero = nuevo;
            return true;
        }

        if (nuevo.codigo === this.primero.codigo) {
            return false; // Código duplicado
        }

        let actual = this.primero;
        while (actual.sig !== null && actual.sig.codigo < nuevo.codigo) {
            actual = actual.sig;
        }

        if (actual.codigo === nuevo.codigo || (actual.sig !== null && actual.sig.codigo === nuevo.codigo)) {
            return false;
        }

        nuevo.sig = actual.sig;
        nuevo.ant = actual;

        if (actual.sig !== null) {
            actual.sig.ant = nuevo;
        }
        actual.sig = nuevo;

        return true;
    }


    buscar(codigo) {
        codigo = Number(codigo);
        let actual = this.primero;

        while (actual !== null) {
            if (actual.codigo === codigo) {
                return actual;
            }
            if (actual.codigo > codigo) {
                break;
            }
            actual = actual.sig;
        }
        return null;
    }

    eliminar(codigo) {
        codigo = Number(codigo);
        let actual = this.primero;

        while (actual !== null) {
            if (actual.codigo === codigo) {
                if (actual.ant !== null) {
                    actual.ant.sig = actual.sig;
                } else {
                    this.primero = actual.sig; 
                }

                if (actual.sig !== null) {
                    actual.sig.ant = actual.ant;
                }

                actual.sig = null;
                actual.ant = null;
                return actual;
            }

            if (actual.codigo > codigo) {
                break;
            }
            actual = actual.sig;
        }
        return null;
    }

    extraerPrimero() {
        if (this.primero === null) {
            return null;
        }
        let extraido = this.primero;
        this.primero = this.primero.sig;

        if (this.primero !== null) {
            this.primero.ant = null;
        }

        extraido.sig = null;
        extraido.ant = null;
        return extraido;
    }

    extraerUltimo() {
        if (this.primero === null) {
            return null;
        }

        let actual = this.primero;
        while (actual.sig !== null) {
            actual = actual.sig;
        }

        if (actual.ant !== null) {
            actual.ant.sig = null;
        } else {
            this.primero = null; 
        }

        actual.sig = null;
        actual.ant = null;
        return actual;
    }

    listar() {
        if (this.primero === null) {
            return "<p>El inventario está vacío.</p>";
        }

        let resultado = "";
        let actual = this.primero;

        while (actual !== null) {
            resultado += actual.infoHTML();
            actual = actual.sig;
        }
        return resultado;
    }

    listarInverso() {
        if (this.primero === null) {
            return "<p>El inventario está vacío.</p>";
        }

        let actual = this.primero;
        while (actual.sig !== null) {
            actual = actual.sig;
        }

        let resultado = "";
        while (actual !== null) {
            resultado += actual.infoHTML();
            actual = actual.ant;
        }
        return resultado;
    }
}