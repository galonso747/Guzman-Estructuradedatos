const Estudiantes = [

];

const Materia = [

];

const Calificaciones = [

];

const agregar_estudiante = (nombre) => {
    Estudiantes.push(nombre);
    Calificaciones.push([]);
}

const agregar_materia = (materia) => {
    Materia.push(materia);
}

const agregar_calificaciones = (nombre, materia, calificacion) => {
    let indexStudent = Estudiantes.indexOf(nombre);
    let indexSubject = Materia.indexOf(materia);

    Calificaciones[indexStudent][indexSubject] = calificacion;
}

const editar_calificaciones = (nombre, materia, calificacion) => {
    let indexStudent = Estudiantes.indexOf(nombre);
    let indexSubject = Materia.indexOf(materia);

    Calificaciones[indexStudent][indexSubject] = calificacion;
}

const imprimir_estudiantes = () => {
    console.log("**Lista de Alumnos**");
    for (let i = 0; i <= Estudiantes.length - 1; i++){
        console.log(`Nombre : ${Estudiantes[i]}`);
    }
}

const imprimir_materias = () => {
    console.log("**Lista de Materias**");
    for (let i = 0; i <= Materia.length - 1; i++){
        console.log(`Materia : ${Materia[i]}`);
    }
}

const imprimir_calificaciones = () => {

    for (let a = 0; a <= Estudiantes.length - 1; a++){
        for (let b = 0; b <= Materia.length - 1; b++){
            console.log(`Alumno: ${Estudiantes[a]} Materia: ${Materia[b]} Calificacion: ${Calificaciones[a][b]}`);
        }
    }   
}

const Escuela = (Entrada, nombre, materia, calificacion) => {
    console.log("Por favor elija una opción: ");
    console.log("1.- Agregar Estudiantes")
    console.log("2.- Agregar Materias")
    console.log("3.- Agregar Calificaciones")

    switch(Entrada){
        case "1":
            agregar_estudiante(nombre);
            break;
        case "2":
            agregar_materia(materia);
            break;
        case "3":
            agregar_calificaciones(nombre,materia,calificacion);
        case "4":
            editar_calificaciones(nombre,materia,calificacion);
        default:
            console.log("Opción no válida, ingrese el número de la opción");
    }
}

Escuela("1","Guzman","","");
console.log("=====================================================");
console.log("Se ha añadido un alumno");
console.log("=====================================================");
Escuela("1","Alonso","","");
console.log("=====================================================");
console.log("Se ha añadido un alumno");
console.log("=====================================================");
Escuela("1","Fabiola","","");
console.log("=====================================================");
console.log("Se ha añadido un alumno");
console.log("=====================================================");
Escuela("1","Evelyn","","");
console.log("=====================================================");
console.log("Se ha añadido un alumno");
console.log("=====================================================");
Escuela("2","","Español","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");
Escuela("2","","Matemáticas","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");
Escuela("2","","Geografía","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");
Escuela("2","","Historia","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");
Escuela("3","Guzman","Español","8");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Guzman","Matemáticas","9");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Guzman","Geografía","10");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Guzman","Historia","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Alonso","Español","9");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Alonso","Matemáticas","8.5");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Alonso","Geografía","9.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Alonso","Historia","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Fabiola","Español","8");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Fabiola","Matemáticas","9");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Fabiola","Geografía","9.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Fabiola","Historia","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Evelyn","Español","9.5");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Evelyn","Matemáticas","8.5");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Evelyn","Geografía","9.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
Escuela("3","Evelyn","Historia","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");
imprimir_estudiantes();
console.log("=====================================================");
imprimir_materias();
console.log("=====================================================");
imprimir_calificaciones();
console.log("=====================================================");
Escuela("4","Guzman","Español","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");
Escuela("4","Guzman","Matemáticas","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");
Escuela("4","Guzman","Geografía","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");
Escuela("4","Guzman","Historia","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");
imprimir_calificaciones();
console.log("=====================================================");

