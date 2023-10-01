/*Desarrolla un sistema que permita registrar empleados en una empresa. Cada empleado debe
tener un nombre, apellido, ID, cargo y salario. El sistema debe:
permitir agregar un nuevo empleado
listar todos los empleados
editar informacion de un empleado usando su ID
eliminar un empleado usando su ID */

class Empleado {
    constructor(nombre, apellido, id, cargo, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
        this.cargo = cargo;
        this.salario = salario;
    }
}

class SistemaEmpleados {
    constructor() {
        this.empleados = [];
    }

    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
        console.log(`Empleado ${empleado.nombre} ${empleado.apellido} agregado correctamente.`);
    }

    listarEmpleados() {
        console.log("Lista de empleados:");
        this.empleados.forEach(empleado => {
            console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre} ${empleado.apellido}, Cargo: ${empleado.cargo}, Salario: ${empleado.salario}`);
        });
    }

    editarEmpleado(id, nuevoNombre, nuevoApellido, nuevoCargo, nuevoSalario) {
        const empleado = this.empleados.find(e => e.id === id);
        if (empleado) {
            empleado.nombre = nuevoNombre;
            empleado.apellido = nuevoApellido;
            empleado.cargo = nuevoCargo;
            empleado.salario = nuevoSalario;
            console.log(`Información de empleado con ID ${id} actualizada correctamente.`);
        } else {
            console.log(`No se encontró ningún empleado con ID ${id}.`);
        }
    }

    eliminarEmpleado(id) {
        const indice = this.empleados.findIndex(e => e.id === id);
        if (indice !== -1) {
            this.empleados.splice(indice, 1);
            console.log(`Empleado con ID ${id} eliminado correctamente.`);
        } else {
            console.log(`No se encontró ningún empleado con ID ${id}.`);
        }
    }
}

const Pensiones_y_mas = new SistemaEmpleados();

const empleado1 = new Empleado("Guzman", "Alonso", 1, "Gerente", 20000);
const empleado2 = new Empleado("Luis_Enrique", "Alonso", 2, "Subgerente", 15000);
const empleado3 = new Empleado("Maria", "Alcudia", 3, "Asistente_administrativa", 10000);
const empleado4 = new Empleado("Evelyn", "Carapia", 4, "Staff", 50000);
const empleado5 = new Empleado("Jeniffer", "Jimenez", 5, "Staff", 50000);
const empleado6 = new Empleado("Edita", "Dantorie", 6, "Stafff", 50000);
const empleado7 = new Empleado("Raul", "De los Santos", 7, "Staff", 5000);

console.log("----------------------------------------------------------------------");

Pensiones_y_mas.agregarEmpleado(empleado1);
Pensiones_y_mas.agregarEmpleado(empleado2);
Pensiones_y_mas.agregarEmpleado(empleado3);
Pensiones_y_mas.agregarEmpleado(empleado4);
Pensiones_y_mas.agregarEmpleado(empleado5);
Pensiones_y_mas.agregarEmpleado(empleado6);
Pensiones_y_mas.agregarEmpleado(empleado7);

console.log("----------------------------------------------------------------------");

Pensiones_y_mas.listarEmpleados();

console.log("----------------------------------------------------------------------");

Pensiones_y_mas.editarEmpleado(1, "Benjamin", "Martinez", "Gerente", 20000);
Pensiones_y_mas.listarEmpleados();

console.log("----------------------------------------------------------------------");

Pensiones_y_mas.eliminarEmpleado(2);

Pensiones_y_mas.listarEmpleados();


