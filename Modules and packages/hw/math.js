import temperature from './temperature.json' assert { type:"json" }
import { isNumber, onlyNumbers } from './types.js'



export const arr = temperature.temps 
console.log(arr)
console.log(isNumber(arr)) //[ 100, -50, 0.5, 1 ]

export const add = (onlyNumbers) =>  {
     return onlyNumbers.reduce( (acc,current) => acc + current, 0 )

}
//console.log(add(onlyNumbers))



export const substract = (onlyNumbers) =>{
    return onlyNumbers.reduce( (acc,current) => acc - current )
}
//console.log(substract(onlyNumbers))



export const multiply = (onlyNumbers) =>  {
    //return onlyNumbers.reduce( (acc,current) => acc * current,1 )
    let mult = 1
    onlyNumbers.forEach( number  => {
        mult *= number
    });

    return mult
}
//console.log(multiply(onlyNumbers))



export const divide = (onlyNumbers)=> {
    //return onlyNumbers.reduce( (acc,current) => acc / current )
    let division = onlyNumbers[0]
    for(let i = 1; i < onlyNumbers.length; i++){
        division /= onlyNumbers[i]
    }
    return division 

}
//console.log(divide(onlyNumbers))


//HW2: anonymous vs named functions difference

//Named functions are imported with the name the were exported, while anonymous fn,variable can be imported with the name we want

//arrow function
//export const add = (a,b) =>  a + b

//function expresion
//const add = function(a,b) {return  a + b}

//function declaration
// function add(a,b){
//     return a+b
// }