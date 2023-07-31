// Module: main

console.log("!!!! App starting......!")
// .....

//let config = require('./config.json')

import * as config from './config.js' //assert { type: 'json' }
//import config from './config.json' with { "type": "json" }
console.log(config)
console.log(config.__proto__)

// console.log('Supported formats: ')
// config.forEach( 
//     option => console.log('----> ',option)
// )



console.log("!!!! App finished!")

