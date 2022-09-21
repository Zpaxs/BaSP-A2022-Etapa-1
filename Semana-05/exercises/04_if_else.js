/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
console.log("-Exercise 4.a:");
var randomNumber = Math.random(0, 1);
if (randomNumber >= 0.5) {
  alert(randomNumber + " Greater than 0,5");
} else {
  alert(randomNumber + " Lower than 0,5");
}
console.log("Number: " + randomNumber);

/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:*/
console.log("-Exercise 4.b:");
var age = Math.random(0, 100) * 100;
console.log("age: " + age);

// i. “Bebe” si la edad es menor a 2 años;
if (age <= 2) {
  alert("If the age is: " + age + " it's a baby");
}

// ii. “Niño” si la edad es entre 2 y 12 años;
else if (age > 2 && age < 12) {
  alert("If the age is: " + age + " it's a child");
}

// iii. “Adolescente” entre 13 y 19 años;
else if (age > 13 && age < 19) {
  alert("If the age is: " + age + " it's a teenager");
}

// iv. “Joven” entre 20 y 30 años;
else if (age > 20 && age < 30) {
  alert("If the age is: " + age + " it's a young person");
}

// v. “Adulto” entre 31 y 60 años;
else if (age > 31 && age < 60) {
  alert("If the age is: " + age + " its an adult");
}

// vi. “Adulto mayor” entre 61 y 75 años;
else if (age > 61 && age <= 75) {
  alert("If the age is: " + age + " its an older person");
}

// vii. “Anciano” si es mayor a 75 años.
else {
  alert("If the age is: " + age + " it's an elder");
}
