// Sesion 4 - Funciones
/*
function myFunction(parameter1, parameter2){
    //ejecutar algun codigo
}
*/

// Ejemplo 1 - Calcular Edad
/*
function calculateAge(birthYear){
    const age = 2022 - birthYear;
    return age;
}
/*
const ageJohn = calculateAge(1969); // <-- Si enviamos un string, JS hace type cohersion para realizar la operacion (convirtiendolo a numero)

console.log('La edad de John es: ', ageJohn) // 53
*/


// Ejemplo 2 - Calcular los años que faltan para el retiro
/*
function yearsUntilRetirement(yearOfBirth, name){
    const age = calculateAge(yearOfBirth);
    const retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years`); // <-- Template literals
}

yearsUntilRetirement(1969, 'Jose');

*/

// Sesion 4 - Reto 1
/*
function power(base, exponent){
    let result=1;
    for (let iteration = 0; iteration < exponent; iteration++){
        result = result * base;
    }
    console.log(`El resultado de ${base} a la ${exponent} potencia es: ${result}`); // <-- Template literals
}

power(2, 10);
*/

// Ejemplo 3 - Expresion de una funcion
/*
const whatDoYouDo = function(job,name){  // No tiene nombre
    switch (job) {
        case 'developer':
            return name + ' develops cool apps...'
        case 'designer':
            return name + ' designs awesome websites'
        default:
            return name + ' does something else'
    }
}

console.log(whatDoYouDo('developer','Pepe'));
*/

// Ejemplo 4 - Expresion de una funcion - Recursividad
/*
const factorial = function fac(num){
    return num < 2 ? 1 : num * fac(num - 1);   // Recursividad - se llama la funcion a si misma
}

console.log(factorial(5))
*/

// Ejemplo 5 
/*
function logName(){
    const name = 'John Doe';
    console.log(name);
}

logName();

*/
/*
(function(){
    const name = 'John Doe';
    console.log(name);
})()          //    <--- Expresiones de funciones ejecutadas inmediatamente IIFE
*/

// Arrow Functions - Ejemplo 6

//const firstNames = ['John', 'Jane', 'Mark'];
/*
function getFullNames(names){   // Funcion normal
    const fullNames = [];
    for (const name of names){
        fullNames.push(`${name} Doe`)
    }
    return fullNames;
}
*/

// Arrow Function
/*
const getFullNames = (names) => {   // Fat arrow (anonima)
    const fullNames = [];
    for (const name of names){
        fullNames.push(`${name} Doe`)
    }
    return fullNames;
}

const fullNames = getFullNames(firstNames);

console.log(fullNames);

*/

// Ejemplo Arrow functions
/*
const logName = name => console.log(`Hello ${name}`)
logName('Jose'); 
*/

// Sesion 4 - Reto 2

// Dando 2 numeros, regrese el numero mayor


//const getLargerInt = (num1,num2) => num1 < num2 ? num2 : num1;  
/*
const getLargerInt = (num1,num2) => console.log(`El numero mayor de los ingresados es: ${num1 < num2 ? num2 : num1}`);  
getLargerInt(5,7);
*/

// Sesion 4 - Reto 3

// funcion que compare los numeros en un array
/*
const getLargerInt = (numeros) => console.log(`El numero mayor de los ingresados es: ${numeros[0] < numeros[1] ? nummeros[1] : numeros[0]}`);  
getLargerInt([10,4]);
*/

// Sesion 4 -  Reto 3 - a

// Encontrar los numeros de Fibonacci

function fibonacci(numero) {
    if (numero === 0){
        return 0;
    }else if (numero === 1){ 
        return 1;
    }else{        
        return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}

const secuenciaFibonacci = (limit) => {
    if (limit < 1){
        console.log('Limit debe ser mayor que cero')
    }
    for(let i = 0; i<= limit; i++){
        console.log(fibonacci(i));
    }
}


secuenciaFibonacci(6);