/*Editor de texto simple
Desarrolla un programa que permita al usuario ingresar una cadena de texto y realice
operaciones sobre ella. El programa debe permitir:
Insertar un caracter en una posicion especifica
Eliminar un caracter en una posicion especifica
Reemplazar un caracter en una posicion especifica
Convertir la cadena en un arreglo de palabras
Mostrar la cadena actualizada tras cada operacion
Para lograrlo, representa la cadena de texto como un arreglo de caracteres. */

let texto = [
  ["F"],
  ["A"],
  ["N"],
  ["T"],
  ["A"],
  ["S"],
  ["T"],
  ["I"],
  ["C"],
  ["O"],

];


const Cadena_de_Texto = () => {
  let message = "";
  for (let i = 0; i <= texto.length - 1; i++){
      message = message + texto[i];
  }
  console.log(message);
}

const agregar_caracter = (letra) => {
  texto.push([letra]);
}

const borrar_caracter = (posicion) => {
  texto.splice(posicion, 1)
}

const editar_caracter = (letra, posicion) => {
  let i = parseInt(posicion);
  let h = 0;
  
  texto[i][0] = letra;
}


agregar_caracter("!");
Cadena_de_Texto();
console.log("---------------------------------------------------------------------------------------");

borrar_caracter(4);
Cadena_de_Texto();
console.log("----------------------------------------------------------------------------------------");

editar_caracter("T", 4);
Cadena_de_Texto();
console.log("----------------------------------------------------------------------------------------");


