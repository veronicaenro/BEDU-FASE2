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






