const h1 = document.querySelector('h1');
const form = document.querySelector('#form1');
const number1 = document.querySelector('#inputN1');
const number2 = document.querySelector('#inputN2');
const btnSuma = document.querySelector('#btnSuma');
const pResult = document.querySelector('#presult');
// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// }
// );

//innerHTML convierte todo a codigo HTML en cambio innertext toma todo como texto.
// h1.innerHTML = 'RATANA </br> Rata humana';

//Formas de ver y modificar los atributos de etiquetas HTML desde nuestro código JS
//setAttribute recibe dos parametros: 1. atributo a cambiar, 2.nuevo valor del atributo
//getAttribute nos muestra en valor que contienen los atributos que seleccionemos
// h1.setAttribute('class', 'rojo');
// console.log(h1.getAttribute('class'));

//añadir y eleminar clases desde nuestro código JS
// h1.classList.add('rojo');
// h1.classList.remove('verde');

//Cambiar el valor de un input desde JS
// input.value = "456";

//Crear elementos HTML desde "0"
//1.creamos una imagen en HTML
// const img = document.createElement('img');
//2.Le colocamos los atributos a esa imagen, en este caso una url
// img.setAttribute('src','https://images.pexels.com/photos/12576345/pexels-photo-12576345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');


//RETO = Borrar el contenido del parrafo y dejar la imagen visible
// pid.innerHTML = "";
// pid.append(img);

form.addEventListener('submit', calcularSuma2N);
number1.addEventListener('focus', saludoFocus);


function calcularSuma2N(event) {
    // console.log({event});
    event.preventDefault();
    let rSuma = parseInt(number1.value) + parseInt(number2.value);
    pResult.innerText = `El resultado de la suma es: ${rSuma}`;
}

function saludoFocus() {
    console.log("Focus :V");
}