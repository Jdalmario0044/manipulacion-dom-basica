{
// Variables
//#3->Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = 'Jose';
let apellido = 'Almario';
let nUsuarioPlatzi = 'jalmario444'; 
let edad = 21;
let correoElectrinico = 'test.almario@gmail.com';
let mayorEdad = true;
let dineroAhorrado = 70000;
let deudas = 0;

// #4->Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//-Nombre completo (nombre y apellido)
//-Dinero real (dinero ahorrado menos deudas)
let nombreCompelto = `${nombre} ${apellido}`;
console.log(nombreCompelto);

let dineroReal = dineroAhorrado - deudas;
console.log(`${nombreCompelto} tiene: $${dineroReal} pesos colombianos.`);
}
{
//Funciones
//#2->Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
//Solución
function concatenar(name,lastName,nickname) {
    let completeName = `${name} ${lastName}`;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
}

concatenar('Jose','Almario','El pepe');
}
{
//Condicionales
//#2->Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
//Solución 1
let tipoDeSuscripcion = 'Free';

if (tipoDeSuscripcion === 'Free') {
    console.log('Solo puedes tomar los cursos gratis');
}else if (tipoDeSuscripcion === 'Basic'){
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
}else if (tipoDeSuscripcion === 'Expert'){
    console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
}else if (tipoDeSuscripcion === 'ExpertPlus'){
    console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
}else {
    console.log('Tipo de suscripción no resgistrada');
}

//Solución 1.1 (solo usando if)
function tipoSup(suscripcion) {
    if (suscripcion === 'Free') {
        console.log('Solo puedes tomar los cursos gratis');
        return;
    }
    if (suscripcion === 'Basic'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
        return;
    }
    if (suscripcion === 'Expert'){
        console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
        return;
    }
    if (suscripcion === 'ExpertPlus'){
        console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
        return;
    } 
        console.warn('Tipo de suscripción no resgistrada');
}

//Solución 2 con arrays
let typeSuscripcion = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
    let infoSuscripcion = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

    let userSuscription = "Expert";
    for (let i=0; i < typeSuscripcion.length; i++) {
      if (userSuscription == typeSuscripcion[i]) {
          console.log(`Si estas suscrito al plan ${typeSuscripcion[i]} en el cual ${infoSuscripcion[i]}`)
      }
    }

//Solución 3 con objetos
const tiposDeSuscripciones = {
    free: 'solo puedes tomar los cursos gratis',
    basic: 'puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'puedes tomar casi todos los cursos de Platzi durante un año',
    expertplus: 'tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
}
function validarSup(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    
    console.warn('Tipo de suscripción no resgistrada');
}
}
{
//Ciclos
//#2->Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
    console.log(`El valor de i es: ${i}`);
    i++;
}

let i2 = 10;
while (i2 >= 2) {
    console.log(`El valor de i es: ${i2}`);
    i2--;
}
//#3->Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let rUser = prompt('¿Cuánto es 2 + 2?');
let c2 = false;

while (c2 === false) {
    
    if (rUser == 4) {
        console.log('Correcto, you are the best');
        c2 = true;
    }else {
        alert('Respuesta incorrecta');
        rUser = prompt('¿Cuánto es 2 + 2?');
    }
}
//Solución 2
let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 +2?');
    respuesta = pregunta;
}
}
{
//Arrays y objetos
//#2->Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
let libros = ['De animales a dioses','El gen egoista','Fight club'];

function addToArray(lista) {
    libros.unshift(lista);
    console.log(libros[0]);
}

addToArray('El mundo de sofía');

//#3->Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
//Solución 1
function recorridoArray(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

recorridoArray(['moto 1', 'moto 2', 'moto 3', 'moto 4']);

//Solución 2
let seasons = ['winter', 'spring', 'autumn', 'summer'];
let mySeason = (arr) => console.log(arr[0]);
seasons(mySeason);


//#4->Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let cars = {'Mustang': 'Cobra 1986', 'BMW': 'Camioneton 2022'};
let myCars = arr => {for(let car in cars) console.log(`🚀 ${car}`)}
myCars();

//Solución 2
function recorrerObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
}