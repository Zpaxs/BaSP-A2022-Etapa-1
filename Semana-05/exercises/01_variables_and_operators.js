console.log("EXERCISE 1: variables and operator");

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
números en una 3er variable.*/
console.log("-Exercise 1.a:");
var cats = 2;
var dogs = 1;
var myPets = cats + dogs;
console.log("My pets: " + myPets);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
console.log("-Exercise 1.b:");
var catsNames = "Tintin and GNU";
var dogsNames = "Tina";
var myPetsNames = dogsNames + ", " + catsNames;
console.log("My pets are: " + myPetsNames);

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log("-Exercise 1.c:");
var myName = "Soledad";
var myLastName = "Acosta";
var myNameLength = myName.length + myLastName.length;
console.log("My name is " + myNameLength + " letters long.");
