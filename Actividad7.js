/*implementa una clase llamada ESTUDIANTE que tenga propiedades para el NOMBRE, MATRICULA y NOTAS.
la clase deberia tener metodos para agregar notas, obtener el promedio de las notas y mostrar los
datos del estudiante. Una vez que hayas creado la clase, crea algunos objetos de estudiantes y 
utiliza sus metodos.*/

class Estudiante {
    constructor(nombre, matricula) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.notas = [];
    }

    agregarNota(nota) {
        this.notas.push(nota);
    }

    obtenerPromedio() {
        if (this.notas.length === 0) {
            return 0;
        }
        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Notas: ${this.notas.join(', ')}`);
        console.log(`Promedio: ${this.obtenerPromedio()}`);
    }
}

// Crear objetos de estudiantes y usar sus métodos
const estudiante1 = new Estudiante("Guzman Alonso", "34567");
estudiante1.agregarNota(85);
estudiante1.agregarNota(85);
estudiante1.agregarNota(85);
estudiante1.mostrarDatos();

console.log("----------------------------------------------------------------------");

const estudiante2 = new Estudiante("Fabiola Alcudia", "35567");
estudiante2.agregarNota(92);
estudiante2.agregarNota(92);
estudiante2.agregarNota(92);
estudiante2.mostrarDatos();




