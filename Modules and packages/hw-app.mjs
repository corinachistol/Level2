
import {arr, isNumber, onlyNumbers} from './types.js'
import { add,divide, substract, multiply } from './math.js'

//console.log(arr)

console.log(onlyNumbers) // [ 100, -100, 0.5, 1 ]
console.log(...onlyNumbers)  // 100 -100 0.5 1

function avgTempValue(...onlyNumbers) {
    let sum =  add(...onlyNumbers)
    return sum
   
}
console.log(avgTempValue(...onlyNumbers))

//console.log( sum)