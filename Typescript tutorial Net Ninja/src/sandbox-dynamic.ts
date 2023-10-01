let age: any = 25

age = true;
console.log(age)

age= "hello"
console.log(age)

age= {name:'luigi'}
console.log(age)

let mixed:any[] = []

mixed.push(5)
mixed.push("mario")
mixed.push(false)
console.log(mixed)

//Declaram tipul obiectului si tipul proprietatilor din obiect
let ninja: {name: any, age: any}

ninja = {name:"yoshi",age:25}
console.log(ninja)

//Any poate fi folositor in unele cazuri, pe cind in altele ne poate duce in eroare
ninja = {name:25,age:"yoshi"}
