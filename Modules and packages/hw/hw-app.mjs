
import {arr, isNumber, onlyNumbers} from './types.js'
import { add,divide, substract, multiply } from './math.js'

//console.log(arr)

console.log(onlyNumbers) // [ 100, -100, 0.5, 1 ]


function avgTempValue(onlyNumbers) {
    let sum =  add(onlyNumbers)
    let avg = sum / onlyNumbers.length
    
    return avg
   
}

console.log(avgTempValue(onlyNumbers))

