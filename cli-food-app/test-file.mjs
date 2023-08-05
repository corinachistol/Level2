//video 00015_11 part 4
import {Food}  from './food/Food.mjs'
import {save,load} from './persistance/index.mjs'
//console.log(save)

//save( new Food("Salad"), "Food" )

let data = load()
console.log(data.print())

//Food----> JSON ------> Object