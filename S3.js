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

const numbers = [5,3,4,7,2,1,9,7,7];
let suma = 0;

for (const number of numbers) {
    suma+=number;
}

const promedio=suma/(numbers.length);
console.log('Promedio:', promedio);
