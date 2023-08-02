// function checking typeof values
import temperature from './temperature.json' assert { type:"json" }

console.log(temperature)
//console.log(typeof temperature)

export const arr = temperature.temps
//console.log(arr)

export const isNumber = (arr) => {
    return arr.filter(element => typeof element == "number" )
   
}
//console.log(isNumber(arr))

export const onlyNumbers = isNumber(arr)

console.log(onlyNumbers)

// export const onlyNumbers = function isNumber(arr){
//     return arr.filter(element => typeof element == "number" )
   
// }