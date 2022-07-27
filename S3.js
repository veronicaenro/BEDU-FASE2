// Sesion 3 - Ejemplo 1
/*
const numbers = [1,3,4,7,2,1,9,0]

// const doubled = [2,6,8,14,4,2,18,0]   <- Resultado

const doubled = []

for (let index=0; index < numbers.length; index++){
    // doubled[index]= numbers[index] * 2;
    doubled.push(numbers[index] * 2)
}

console.log('Numbers:', numbers);
console.log('Doubled:', doubled);
*/

/* ------------------------------------
const numbers = [1,3,4,7,2,1,9,0]
const doubled = []

for (const number of numbers) {
    doubled.push(number * 2)
}


console.log('Numbers:', numbers);
console.log('Doubled:', doubled);
*/

/*------------------------------------ 
const numbers = [1,3,4,7,2,1,9,0]
const doubled = []

for (const number of numbers) {
    if(number===1 || number===7) continue // <- Si el valor es igual a 1 o 7 salta esa posicion y continua
    doubled.push(number * 2)
}


console.log('Numbers:', numbers);
console.log('Doubled:', doubled);
*/

// Reto 1 - Calcular promedio

// const numbers = [5,3,4,7,2,1,9,7,7];
// let suma = 0;

// for (const number of numbers) {
//     suma+=number;
// }

// const promedio=suma/(numbers.length);
// console.log('Promedio:', promedio);

//-------------------------------------------------

// OBJETOS 

/*
const john={
    firstName:'John',
    lastName: 'Doe',
    birthYear: 1990
}

console.log(john.firstName);
console.log(john['lastName']);

john.firstName='Jane';
john['lastName']='Does';

console.log(john.firstName);
console.log(john['lastName']);

*/

//Ejemplo convirtiendo un objeto en array

/*
const car = {
    brand: 'Nissan',
    model:'Versa',
    year: 2020
}

// Resultado = [['brand,'Nissan'], ['model','Versa'],['year',2020]]


const keys = Object.keys(car); // Extrae los nombres de las propiedades en el orden en el que aparecen
const pairs = [];

for(let i = 0 ; i < keys.length ; i++){
    pairs.push([keys[i], car[keys[i]]])
}

console.log(pairs);



// Reto 2 Convert Array to Object

const auto = {};
//const auto = new Object;

for (let index = 0; index < pairs.length; index++) {
    auto [pairs[index][0]] = pairs [index][1]
}

console.log(auto);
*/

// Ejemplo - Spread Operator -------------------
/*
const colors = ['red','blue','green']

const myColors = [...colors] // <-- Hace una copia del arreglo

colors[0] = 'pink'

console.log('Colors:', colors)
console.log('My Colors:', myColors)

const auto = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

const automovil={...auto}

console.log(auto)
console.log(automovil)

auto.brand='Ford'

console.log(auto)
console.log(automovil)
*/

// Spread Operator - Ejemplo 2
/*
const primeros = [1,2,3]
const segundos = [4,5,6]

const todos = [...primeros,...segundos]

console.log(todos);

*/

// Spread Operator - Ejemplo 3
/*
const auto = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

const concesionaria = {
    vendedor: 'Jose',
    oficina: 'Perisur',
}

const resultado = {
    ...auto,
    ...concesionaria,
    year:2022
}

console.log(resultado)
*/

// Destructuring - Ejemplo 1 -----------------------
/*
const colors = ['red','blue','green']

//const Red = colors[0]
// const Blue = colors[1]
// const Green = colors[2]

const [Red, Blue, Green] = colors; // <-- se extraen los valores de las posiciones en el arreglo colors y  al mismo tiempo se les asigna el nombre de la variable

console.log(Red)
console.log(Blue)
console.log(Green)
*/

// Destructuring -  Ejemplo 2

const person = {
    firstName:'John',
    lastName: 'Doe',
    birthYear: 1990
}

//const{firstName: name,lastName} = person;
const{firstName: name, job = 'Developer'} = person;

console.log('Name:', name)
//console.log('Last name:', lastName)
console.log('Job:', job)