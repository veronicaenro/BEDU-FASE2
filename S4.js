// Sesion 4 - Funciones
/*
function myFunction(parameter1, parameter2){
    //ejecutar algun codigo
}
*/

// Ejemplo 1 - Calcular Edad

function calculateAge(birthYear){
    const age = 2022 - birthYear;
    return age;
}
/*
const ageJohn = calculateAge(1969);

console.log('La edad de John es: ', ageJohn) // 53
*/


// Ejemplo 2 - Calcular los años que faltan para el retiro

function yearsUntilRetirement(yearOfBirth, name){
    const age = calculateAge(yearOfBirth);
    const retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years`);
}

yearsUntilRetirement(1969, 'Jose');