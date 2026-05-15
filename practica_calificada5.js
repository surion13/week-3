/*Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:*/

let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));
let nota4 = parseInt(prompt("Ingrese la cuarta nota:"));

let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

let mensaje = "";

if (promedio >= 90) {
    mensaje = "Excelente";
} else if (promedio >= 75) {
    mensaje = "Bueno";
} else if (promedio >= 60) {
    mensaje = "Regular";
} else {
    mensaje = "Insuficiente";
}

console.log("Promedio: " + promedio);
console.log("Rendimiento: " + mensaje);

alert("Promedio: " + promedio + "\nRendimiento: " + mensaje);

/*Ejercicio 2 – Calculadora de Tarifa de Transporte */
let edad = parseInt(prompt("Ingrese su edad:"));
let estudiante = prompt("¿Es estudiante? (sí o no)").toLowerCase();
let distancia = parseInt(prompt("Ingrese la distancia en kilómetros:"));

let precioBase = 100;
let total = precioBase;

if (edad < 18) {
    total = precioBase * 0.5;
} else if (edad > 60) {
    total = precioBase * 0.4;
} else if (estudiante === "sí" || estudiante === "si") {
    total = precioBase * 0.75;
}

if (distancia > 30) {
    total = total * 1.10;
}

console.log("Costo final: $" + total);

alert("Costo final: $" + total);


// ejercicio 3 menu de conversion de unidades

let opcion = parseInt(prompt(
    "MENÚ DE CONVERSIONES\n" +
    "1. Celsius a Fahrenheit\n" +
    "2. Fahrenheit a Celsius\n" +
    "3. Metros a Kilómetros\n" +
    "4. Kilómetros a Metros\n" +
    "Seleccione una opción:"
));

let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
let resultado;

switch (opcion) {

    case 1:
        resultado = (valor * 9/5) + 32;
        alert(valor + "°C = " + resultado + "°F");
        break;

    case 2:
        resultado = (valor - 32) * 5/9;
        alert(valor + "°F = " + resultado + "°C");
        break;

    case 3:
        resultado = valor / 1000;
        alert(valor + " metros = " + resultado + " kilómetros");
        break;

    case 4:
        resultado = valor * 1000;
        alert(valor + " kilómetros = " + resultado + " metros");
        break;

    default:
        alert("Opción no válida");
}


// ejercicio 4 sistema de descuentos

let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
let tarjeta = prompt("¿Tiene tarjeta de cliente frecuente? (sí o no)").toLowerCase();

let mensaje = "";

if (totalCompra > 500) {

    totalCompra *= 0.90;
    mensaje = "Se aplicó un descuento del 10%";

    if (tarjeta === "sí" || tarjeta === "si") {
        totalCompra *= 0.95;
        mensaje += " y un 5% adicional por tarjeta.";
    }

} else if (totalCompra <= 100) {

    totalCompra *= 1.05;
    mensaje = "Se aplicó un recargo del 5%";
}

console.log("Precio final: $" + totalCompra);
console.log(mensaje);

alert("Precio final: $" + totalCompra + "\n" + mensaje);


// ejercicio 5 calculadora de edad y etapa de vida 

let nacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let actual = parseInt(prompt("Ingrese el año actual:"));

let cumplio = prompt("¿Ya cumplió años este año? (sí o no)").toLowerCase();

let edad = actual - nacimiento;

if (cumplio === "no") {
    edad--;
}

let etapa = "";

if (edad < 18) {
    etapa = "Menor de edad";
} else if (edad >= 18 && edad <= 30) {
    etapa = "Adulto joven";
} else if (edad >= 31 && edad <= 59) {
    etapa = "Adulto";
} else {
    etapa = "Adulto mayor";
}

console.log("Edad: " + edad);
console.log("Etapa de vida: " + etapa);

alert("Edad: " + edad + "\nEtapa de vida: " + etapa);