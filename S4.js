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