// Sesion 3 - Ejemplo 1

const numbers = [1,3,4,7,2,1,9,0]

// const doubled = [2,6,8,14,4,2,18,0]   <- Resultado

const doubled = []

for (let index=0; index < numbers.length; index++){
    // doubled[index]= numbers[index] * 2;
    doubled.push(numbers[index] * 2)
}

console.log(numbers);
console.log(doubled);