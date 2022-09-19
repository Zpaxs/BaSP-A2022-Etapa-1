/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
"Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log("-Exercise 3.a:");
var monthsSpanish = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Month 5 in spanish is: " + monthsSpanish[4] + " and the month number 11 is: " + monthsSpanish[10]);

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log("-Exercise 3.b:");
console.log("Monts in spanish ordered alfabetically are: " + monthsSpanish.sort());

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log("-Exercise 3.c:");
monthsSpanish.unshift("Something");
monthsSpanish.push("Something as well");
console.log("Months and things: " + monthsSpanish);

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log("-Exercise 3.d:");
monthsSpanish.shift();
monthsSpanish.pop();
console.log("Months without anything are:" + monthsSpanish);

/*e. Invertir el orden del array (utilizar reverse).*/

console.log("-Exercise 3.e:");
monthsSpanish.reverse();
console.log("Months in spanish ordered form z to a are: " + monthsSpanish);

/*f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log("-Exercise 3.f:");
console.log(monthsSpanish.join("-"));

/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log("-Excercise 3.g:");
var monthsSpanish = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Monts in spanish from month number 5 to 11 are: " + monthsSpanish.slice(4, 11));
