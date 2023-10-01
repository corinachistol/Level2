let character = "mario";
let age = 30;

let isBlackBelt = false;


// console.log(character)
character = "luigi";
// age = "Youshi"
age = 40
// isBlackBelt = "yes"
isBlackBelt= true;

// const inputs = document.querySelectorAll('input')
// console.log(inputs)

// inputs.forEach(input => console.log(input))

const circ = (diameter: number) => {
    return diameter * Math.PI
}
console.log(circ(7.5))


//arrays
let names = ["luigi", "mario", "yoshi"]
names.push("toad")
//Daca declaram un array de un tip specific , nu -i putem schibma tipul si nici tipul proprietatilor
// names.push(3)
// names[0] = 3

let numbers = [10,20,30,40]
numbers.push(25)
// numbers.push("Shaun")

let mixt = ["ken", 4, "chun-li", 8, 9, true]
mixt.push("ryan")
mixt.push(20)
mixt[3] = 25

//objects
let ninja = {
    name:"mario",
    belt: "black",
    age:30
}
//Odata ce am definit un obiect nu putem adauga alte proprietati, nu putem schimba datatype of properties, putem schimba valorile, dar trebuie sa fie de acelasi datatype

ninja.age = 40
ninja.name= "ruan"
// ninja.age = "30"

// ninja.skills = ["fighting,sneaking"]

ninja = {
    name:"yoshi",
    belt:"orang",
    age:40,
    
}