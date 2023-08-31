const contactos = [

];

const num_telefonos = [
    
];

const añadirContacto = (contacto, numero_telefono) => {
    contactos.push(contacto);
    num_telefonos.push(numero_telefono);

}

const editarContacto = (contacto, numero_telefono) => {
    let pos = contacto.indexOf(contacto);
    contactos[pos] = contacto;
    num_telefonos[pos] = numero_telefono;

}

const eliminarContacto = (contacto) => {
    let pos = contacto.indexOf(contacto);
    contactos.splices(pos, 1);
    num_telefonos.splice(pos, 1);

}

const imprimirContactos = () => {
    for (let i = 0; i <= contactos.length -1; i++){
    console.log(`Nombre : ${contactos[i]}, Telefono: ${num_telefonos[i]}`);
    }
    
}

const agenda = (entrada, nombre, telefono) => {
    console.log ("Bienvenido a su agenda, seleccione la accion que desea realizar: ");
    console.log ("1.- añadir contacto")
    console.log("2.- editar contacto")
    console.log("3.- eliminar contacto")

    switch(entrada){ 
        case "1":
            añadirContacto(nombre,telefono);
            break;
        case "2" :
            editarContacto(nombre, telefono);
            break
        case "3" :
            eliminarContacto(nombre, telefono);
            break
        default: 
            console.log("opcion no valida, ingrese el numero de la opcion")

    }
}

agenda("1", "Guzman", "9982039879");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("se ha añadido un contacto a la agenda");
imprimirContactos();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
agenda("1", "Fabiola", "9981231576");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("se ha añadido un contacto a la agenda");
imprimirContactos();
agenda("1", "Enrique", "9982345387");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("se ha añadido un contacto a la agenda");
imprimirContactos();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
agenda("2", "Evelyn", "9992341245");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("se ha editado un contacto de la agenda");
imprimirContactos();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
agenda("3", "Evelyn", "9992341245");
console.log("se a eliminado un contacto de la agenda");
imprimirContactos();



