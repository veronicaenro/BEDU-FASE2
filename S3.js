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

const car = {
    brand: 'Nissan',
    model:'Versa',
    year: 2020
}

// Resultado = [['brand,'Nissan'], ['model','Versa'],['year',2020]]

const keys = Object.keys(car); // ['brand','model','year']
const pairs = [];

for(let i = 0 ; i < keys.length ; i++){
    pairs.push([keys[i], car[keys[i]]])
}

console.log(pairs);