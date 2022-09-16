console.log("EXERCISE 2: variables and operator");

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log("-Exercise 2.a:");
var imListeningTo = "Metallica.";
console.log("Im listening to: " + imListeningTo.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log("-Exercise 2.b:");
var guessTheBand = "The Beatles";
var first3Letters = guessTheBand.substring(0, 3);
console.log("Guess the name of this rock and roll band with the first three letters: " + first3Letters);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/
console.log("-Exercise 2.c:");
var guessTheSong = "Smooth Criminal";
var last3Letters = guessTheSong.substring(12, 15);
console.log("Guess the name of this song from Michael Jackson with the last three letters: " + last3Letters);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás 
en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log("-Exercise 2.d:");
var myFavoriteSongFromMJ = "black or white";
var firstLetterUppercase = myFavoriteSongFromMJ.substring(1, 0).toUpperCase();
var remainingLettersLowercase = myFavoriteSongFromMJ.substring(1, 15);
var uppercaseAndLowercase = firstLetterUppercase + remainingLettersLowercase;
console.log("My favorite song form Michael Jackson is: " + uppercaseAndLowercase);
/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio 
en blanco y guardarla en una variable (utilizar indexOf).*/

console.log("-Exercise 2.e:");
var imOutOfIdeas = "The first blank space in this sentence is in the number: ";
var blankSpace = imOutOfIdeas.indexOf(" ");
console.log("The first blank space in this sentence is in the number: " + blankSpace + " position");

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los
 ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
 (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)..*/
console.log("-Exercise 2.f:");
var myNameWronglyWritten = "soledad acosta";
var searchSecondWord = myNameWronglyWritten.indexOf(" ");
var firstLetterNameUppercase = myNameWronglyWritten.substring(1, 0).toUpperCase();
var firstLetterLastNameUppercase = myNameWronglyWritten.substring(searchSecondWord + 1, searchSecondWord + 2).toUpperCase();
var nameCorrectlyWritten =
  firstLetterNameUppercase +
  myNameWronglyWritten.substring(1, searchSecondWord + 1) +
  firstLetterLastNameUppercase +
  myNameWronglyWritten.substring(searchSecondWord + 2);

console.log(nameCorrectlyWritten);
