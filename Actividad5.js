/*Desarrolla un sistema simple para gestionar libros en una biblioteca. Los libros son objetos
con propiedades como TITULO, AUTOR y AÑO. El sistema debe permitir:
Añadir un libro a la coleccion
Eliminar un libro de la coleccion por titulo
Editar los detalles de un libro por titulo
Listar todos los libros disponibles
Ten en cuenta que al añadir o editar un libro, estas trabajando con referencias a objetos */

class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    añadirLibro(libro) {
        this.libros.push(libro);
        console.log(`Libro "${libro.titulo}" añadido a la colección.`);
    }

    eliminarLibroPorTitulo(titulo) {
        const indice = this.libros.findIndex(libro => libro.titulo === titulo);
        if (indice !== -1) {
            this.libros.splice(indice, 1);
            console.log(`Libro "${titulo}" eliminado de la colección.`);
        } else {
            console.log(`No se encontró ningún libro con el título "${titulo}".`);
        }
    }

    editarDetallesPorTitulo(titulo, nuevoTitulo, nuevoAutor, nuevoAño) {
        const libro = this.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.titulo = nuevoTitulo;
            libro.autor = nuevoAutor;
            libro.año = nuevoAño;
            console.log(`Detalles del libro "${titulo}" actualizados.`);
        } else {
            console.log(`No se encontró ningún libro con el título "${titulo}".`);
        }
    }

    listarLibros() {
        console.log("Lista de libros disponibles:");
        this.libros.forEach(libro => {
            console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}`);
        });
    }
}

// Uso del sistema de gestión de biblioteca
const biblioteca = new Biblioteca();

const libro1 = new Libro("Don Quijote", "Miguel de Cervantes", 1605);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro3 = new Libro("1984", "George Orwell", 1949);

biblioteca.añadirLibro(libro1);
biblioteca.añadirLibro(libro2);
biblioteca.añadirLibro(libro3);

console.log("----------------------------------------------------------------------");

biblioteca.listarLibros();

biblioteca.editarDetallesPorTitulo("Don Quijote", "Don Quijote de la Mancha", "Miguel de Cervantes Saavedra", 1605);

console.log("----------------------------------------------------------------------");

biblioteca.listarLibros();

console.log("----------------------------------------------------------------------");

biblioteca.eliminarLibroPorTitulo("1984");

console.log("----------------------------------------------------------------------");

biblioteca.listarLibros();


