// Paradigmas de Programacion - POO
/*
const john ={
    name: 'John',
    birthYear:1990,
    job: 'Developer'
}

const jane ={
    name: 'Jane',
    birthYear:1985,
    job: 'Developer'
}

const mark ={
    name: 'Mark',
    birthYear:1970,
    job: 'Developer'
}
*/

//Constructor

/*
const Person = function(name, birthYear,job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

const jane = new Person('Jane', 1985, 'Designer');
const mark = new Person('Mark', 1975, 'Manager');

console.log(jane);
console.log(mark);
*/

// Reto 1
/*
const Vec = function (x,y){
    this.x = x;
    this.y = y;
}

// Suma de dos vectores (x1 + x2, y1 + y2)
Vec.prototype.plus = function(otroVector) {
return new Vec(this.x + otroVector.x, this.y + otroVector.y);
}

// Resta de dos vectores (x1 - x2, y1 - y2)
Vec.prototype.minus = function(otroVector) {
  return new Vec(this.x - otroVector.x, this.y - otroVector.y);
}

Vec.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979

*/

// HERENCIA

// Ejercicio - Herencia
/*
const Person = function(name, birthYear,job) {
    this.name = name;
}
/*
const john = new Person('John');
*/
/*
const Developer = function(name, skills, yearsOfExperience) {
    
    Person.call(this, name) ;  // Herencia de Person
    
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

const john = new Developer('John','JS',10);

console.log(john);
*/

// Reto 2 - Herencia

const Group = function(){
    this.members = [];
}

Group.prototype.has =  function(value){
    return this.members.includes(value); // "includes" Revisa si un valor esta dentro de un arreglo
}

Group.prototype.add = function(value) {
    if (!this.has(value)) {
        this.members.push(value) // "push" Agrega un valor al arreglo (al final)
    }   
}

Group.from = function(array) {  // Metodo estatico - NO necesita la instancia de una clase para definirse (sin prototype)
    let group = new Group();
    for (let i = 0; i < array.length; i++) {
        group.add(array[i])
    }
    return group
}
    
let listaDeElementos = [1,2,3,4,5]
let group = Group.from(listaDeElementos)

console.log(group);