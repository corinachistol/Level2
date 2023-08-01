// function checking typeof values
import temperature from './temperature.json' assert { type:"json" }
console.log(temperature)
console.log(typeof temperature)

const arr = temperature.temps
console.log(arr)


const isNumber = (arr) => {
    return arr.filter(element => typeof element == "number" )
    // let filtered = arr.filter( (element, index) => {
    //     if(typeof element !== Number){
    //         arr.splice(element[index], )
    //         console.log(arr)
    //     }
    // } ) 
    // return filtered
}

console.log(isNumber(arr))