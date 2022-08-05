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

// Ejercicio 1

const Vec = function (x,y){
    this.x = x;
    this.y = y;
}

Vec.prototype.plus = function(otroVector) {
return new Vec(this.x + otroVector.x, this.y + otroVector.y);
}

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


