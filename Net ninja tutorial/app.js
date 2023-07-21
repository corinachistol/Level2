//Global Objects:
// console
// setTimeout
// setInterval
// __dirname
//require
//exports

// let time = 0

// let timer = setInterval( function (){
//     time += 2;
//     console.log(time + "sec have passed!")
//     if(time > 5){
//         clearInterval(timer)
//     }
// },2000)

// console.log(__dirname)  // global object
// console.log(__filename)  

import {counter,adder, pi} from './stuf.js'
console.log(counter(["shaun", "crystal", "ryu"]))
console.log(pi)
console.log(adder(5,6))

//const events = require('events')
import events from 'events'

let myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', function(message){
    console.log(message)
})

myEmitter.emit('someEvent', "the event was emitted")

//import {util} from 'node:util'
class Person extends events.EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}

//util.inherits(Person,EventEmitter.EventEmitter)


let james= new Person("james")
let mary= new Person("mary")
let ryu= new Person("ryu")

let people = [james,mary,ryu]

people.forEach( function(person){
    person.on('speak', function(message){
        console.log(person.name + " said:" + message)
    })
} )

james.emit('speak', "hello dudes")
mary.emit('speak', 'i want to sleep)))')
ryu.emit('speak', 'good night!')