// Ejercicio 1 sesion 2
/*
const time =1;
let greeting;

if (time >= 0 && time < 12){
    greeting='Buenos Dias!';
}else if (time >=12 && time < 19){
    greeting='Buenas Tardes!';
}else if (time >= 19 && time < 24){
    greeting='Buenas Noches!';
}else{
    greeting='El horario ingresado no es válido';
}

console.log(greeting);
*/

// Ejercicio 2

/*
const day = 2;
let text;

switch (day) {
    case 1:
        text = 'Monday';
        break;
    case 2:
        text = 'Tuesday';
        break;
    case 3:
        text = 'Wednesday';
        break;
    case 4:
        text = 'Thursday';
        break;
    case 5:
        text = 'Friday';
        break;        
    case 6:
        text = 'Saturday';
        break;
    case 7:
        text = 'Sunday';
        break;                    
    default:
        text="Valor Inválido"
        break;
}

console.log(text);
*/

// Ejercicio 3
/*
const speed = 120;
let message;

message = speed  

const isFast=speed>100;
*/

// Ejemplo de Bucle

//console.log('Hello world!');
//console.log('Hello world!');
//console.log('Hello world!');
//console.log('Hello world!');
//console.log('Hello world!');
/*

for (let index = 0; index < 200; index++) {
    if(index === 101) break
    if (index % 2 === 0) console.log('Hello world!, repeticion', index);
}

*/

// Reto 3 - Numeros primos de cero a 100

for (let counter = 0; counter <= 100; counter ++) {
    let isPrime=true;

    for(let index = 2; index <= counter; index++){
        if (counter % index === 0 && index !== counter){
            isPrime=false;
        }
    }
    
    if(isPrime) console.log('Numero Primo es', counter);
}
