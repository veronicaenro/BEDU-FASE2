// Ejemplo de Programacion IMPERATIVA - Decir que es lo que tiene que hacer

/*
const numbers = [1,2,3,4,5];
const doubles = [];

for (var i = 0; i < numbers.length; i++){
    doubles.push(numbers[i]*2);
}

console.log (numbers);
console.log (doubles);
*/

//Programacion funcional - Se enfoca en lo que se quiere conseguir

/*
const numbers = [1,2,3,4,5];
const doubles = numbers.map(function(number){ // Map va por cada uno de los datos 
    return number * 2;
});

console.log (numbers);
console.log (doubles);
*/

// Ejemplo 1
/*
const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}
 //funcion que muta los datos
 /*
function addColor(car){
    car.color = 'Black';
    return car;
}
*/
// funcion que crea un nuevo objeto

/*
function addColor(car){
    const newCar = Object.assign ({}, car, {
        color:'Black'
    });
    return newCar;
}
*/

//Spread Operator
/*
function addColor(car){
    const newCar ={
        ...car,
        color:'Black'
    }
    return newCar;
}

console.log('Antes de ejecutar la funcion: ', car);

const sameCar = addColor(car)

console.log('Despues de ejecutar la funcion: ', car);
console.log('Despues de ejecutar la funcion: ', sameCar);

console.log('Son los mismos autos? ', car === sameCar)
*/


// Funcion Puras
/*
function add(a,b){
    return a+b;
}

// Funcion NO pura
function randomNumber(){
    return Math.floor(Math.random() * 10);
}

console.log(add(2,3));
console.log(randomNumber());
*/

// Ejemplo 2
/*
let cart = [
    {  
        item: 'Laptop',
        qty: 1 
    }
]


function addItemToCart(cart, item, qty){
   //Funcional
   /*
    const newCart = cart.map(function (element){
        return element;
    })
    */
    //Spread operator
    /*
    const newCart = [...cart]
    newCart.push({
        item,
        qty
    })
    return newCart;
}

cart = addItemToCart(cart, 'Telefono', 2);
cart = addItemToCart(cart, 'Tablet', 4);
console.log(cart);
*/

// Funciones de 1ra clase - Expresiones de función
/*
let square = function (number){
    return number * number;
}

var squareOfFour = square(4);
console.log(squareOfFour); 
*/

// Funciones de alto orden: map, filter, reduce
/*
const numbers = [1,2,3,4,5,6,7,8];
const doubles = numbers.map(function(number){ // Map va por cada uno de los datos 
    return number * 2;
});

const evenNumbers = numbers.filter(number => number % 2 === 0);

const sum = numbers.reduce(function(acumulador, valorActual){
    return acumulador + valorActual;
}, 0)

console.log (numbers);
console.log (doubles);
console.log (evenNumbers);
console.log(sum);
*/

// Funciones de Alto Order - Ejemplo 2
/*
const num = 12345;
/*
const str = num.toString();

console.log('num: ',num);
console.log('string: ',str);

const array = str.split('');
*/
/*
const array = num.toString().split(''); // Equivalente a lo de arriba
console.log('array: ',array);
/*
const arrayOfNum = array.map(function(num){
    return Number(num);
})
*/
/*
const arrayOfNum = array.map(Number); // Equivalente a lo de arriba

console.log('array of Numbers: ',arrayOfNum);

const sum = arrayOfNum.reduce(function(acumulador, valorActual){
    return acumulador + valorActual;
}, 0)

console.log('Suma: ',sum);

// Encadenar todos los metos en una sola funcion

function sumDigits(number){
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce(function(a,b){
            return a+b;
        },0)    
}

console.log('Suma digitos: ',sumDigits(num));
*/

// Reto 1 - Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

/*
function flatten(arrays) {
    // return arrays.flat();

    return arrays.reduce(function(arrayFlatten, elem){
        return arrayFlatten.concat(elem)
    },[])
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]
*/

// Reto 2 - Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

function compact(array) {
    return array.filter(value => !!value);
}
  
  const array = [0, '0', NaN, , null, [], {}, 1, false, 2, '', 3];
  const compactedArray = compact(array);
  
  console.log(compactedArray); // [1, 2, 3]
  