// Ejercicio 1 sesion 2

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