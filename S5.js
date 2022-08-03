// Sesion 5 
/*
if (true){
    var foo = 'John Doe'
    console.log(foo)
}

console.log(foo)

*/

// Ejemplos Scope

/*
var numbers = [1,2,3,4,5]
var doubles = []

for (let i=0;i<numbers.length;i++){
    doubles.push(numbers[i]*2)
}

console.log(numbers)
console.log(doubles)
//console.log(i) <-- i esta dentro de i por eso no puede imprimirse fuera del ciclo

*/

// Execution Stack & THIS
/*
function logThis(){
    console.log("is this === window " + (this === window))
}

const foo ={ logThis:logThis }

logThis() //Is this === window? true
foo.logThis() //Is this === window? false

*/
/*
const john = {
    firstName:'John',
    lastName:'Doe',
    birthYear: 1990,
    calculateAge:function(){
        const today = new Date()
        const year = today.getFullYear()
        this.age=year-this.birthYear
    }
} 

console.log(john)

john.calculateAge();

console.log(john)
*/

// Ejemplo de HOISTING
/*
console.log(power(4,2))

const power = (base,exponent) => {
    let resultado = 1;

    //asumiendo que el exponinte es positivo siempre
    for(let i=0; i<exponent;i++){
        resultado = resul
    }
}
*/

// Ejemplo de arrow function y THIS
/*
const john = {
    firstName:'John',
    lastName:'Doe',
    birthYear: 1990,
    calculateAge:() => { // Cuando se usa una arrow function
        const today = new Date()
        const year = today.getFullYear()
        this.age=year-john.birthYear // El this aqui seria el objeto global 'window'
    }
} 

john.calculateAge()

console.log(john)
*/

// Reto 1 
/*
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
function pluck(list, propertyName) {
    let values = [];

    for(let i = 0 ; i < list.length ; i++){
        values.push(list[i][propertyName])
    }
    return values
}

  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]

*/

// Reto 2

//Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

function createPhoneNumber(numeros){
    let tel = ""
    if (numeros.length<10 || numeros.length>10){
        console.log ("El numero telefonico debe tener 10 digitos")
        return
    }

    if(numeros.length == 10){
        for (let numero of numeros){

        } 
    }
    
}


// Reto 3

// Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]

function findMissingNumbers(numbers){
    
}

