//crea una clase PilaLimitada que represente una pila de datos con un tamano maximo definido
//La pila debe tener metodos para PUSH, POP y PEEK, pero si se intenta agregar un elemento
//cuando ya esta llena, debe lanzar un error

//let miPila = new PilaLimitada(3); // Pila con capacidad para 3 elementos
//miPila.push("A");
//miPila.push("B");
//miPila.push("C");
//miPila.push("D"); // Debería lanzar un error, ya que la pila está llena

class PilaLimitada {
    constructor() {
        this.capacidadMaxima = 3;
        this.pila = [];
    }

    push(elemento) {
        if (this.pila.length < this.capacidadMaxima) {
            this.pila.push(elemento);
        } else {
            throw new Error("La pila está llena, no se pueden agregar más elementos.");
        }
    }

    pop() {
        if (this.pila.length === 0) {
            throw new Error("La pila está vacía, no se pueden eliminar más elementos.");
        }
        return this.pila.pop();
    }

    peek() {
        if (this.pila.length === 0) {
            throw new Error("La pila está vacía.");
        }
        return this.pila[this.pila.length - 1];
    }
}

// Uso de la clase PilaLimitada
try {
    let miPila = new PilaLimitada(); // Pila con capacidad para 3 elementos.
    
    miPila.push("A");
    miPila.push("B");
    miPila.push("C");

    console.log("----------------------------------------------------------------------");
    console.log("Elemento en la cima de la pila:", miPila.peek());
    console.log("----------------------------------------------------------------------");
    miPila.push("D"); // Esto lanzará un error porque la pila está llena.
} catch (error) {
    console.error(error.message);
}


