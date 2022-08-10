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

let square = function (number){
    return number * number;
}

var squareOfFour = square(4);
console.log(squareOfFour); 