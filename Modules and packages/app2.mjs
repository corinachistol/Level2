// Module: main

console.log("!!!! App starting......!")
// .....

//Varianta 1
// import * as math from './math.js'
// console.log(math)

// let result = math.add(20,30)
// console.log(result)

//Varianta 2
import {add, substract, multiply, divide}  from './math.js'
console.log(add, substract, multiply, divide)

let result = add(20,30)
console.log(result)

// import { File } from './File.js'
//console.log(File)

// let f = new File ("Fresh-hit-2021", "mp3")
// f.info()

console.log("!!!! App finished!")

