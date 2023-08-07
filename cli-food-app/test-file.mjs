//video 00015_11 part 4
import {Food}  from './food/Food.mjs'
import {save,load} from './persistance/index.mjs'
//console.log(save)

// save( new Food("Salad"), "Food" )
// save( new Food("Salad"), './data/food.json' )

 let data = await load('./data/food.json')
console.log(data)

// Food----> JSON ------> Object


// class A {}
// class B {}
// //----------------
// let a = new A()
// let b = new B()

// console.log(a,b)
// console.log(typeof a, typeof b)
// //reflection 
// console.log(a.__proto__, b.__proto__)
// console.log(a.constructor.name, b.constructor.name)
