/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log("-Exercise 6.a:");
function addition(num1, num2) {
  return num1 + num2;
}
var total = addition(4, 6);
console.log("4+6= ", total);

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN 
como resultado.*/
console.log("-Exercise 6.b:");
function addition(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    alert("One of the values is not a number");
    return NaN;
  } else {
    return num1 + num2;
  }
}
console.log("4+ cat= " + addition(4, "cat"));

/*c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un 
número entero.*/
console.log("-Exercise 6.c:");
function validateInterger(num) {
  return Number.isInteger(num);
}
console.log("7.5 is interger?: " + validateInterger(7.5));
console.log("7 is interger?: " + validateInterger(7));

/*d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a 
entero (redondeado).*/
console.log("-Exercise 6.d:");
function addition(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 + num2;
  }
  alert("One of the numbers is not an interger, it will be rounded up.");
  return Math.round(num1 + num2);
}
console.log("4+ 5.4: " + addition(4, 5.4));

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual.*/
console.log("-Exercise 6.e:");
function roundUp(number) {
  if (Number.isInteger(number)) {
    return number;
  }
  alert("One number is not an interger, it will be rounded up.");
  return Math.round(number);
}
console.log("Number rounded up: " + roundUp(8.5));
console.log("Addition rounded up: " + addition(roundUp(5), roundUp(5.4)));
