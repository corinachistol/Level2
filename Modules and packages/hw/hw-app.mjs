
import {arr, isNumber, onlyNumbers} from './types.js'
import { add,divide, substract, multiply } from './math.js'

//console.log(arr)

console.log(onlyNumbers) // [ 100, -100, 0.5, 1 ]


function avgTempValue(arr) {
    let onlyNumbers = isNumber(arr)
    let sum =  add(onlyNumbers)
    let delta = Math.round(sum / arr.length)
    console.log(`Marja de eroare este ${delta}%`)

}
console.log(avgTempValue(arr))

