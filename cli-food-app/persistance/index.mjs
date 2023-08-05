//use file system
import fs from 'fs'
import map from './map.mjs'
import Clazz from "./map[data['type']]"



//save to "name.txt"
// let name = "Salad"
// fs.writeFileSync('./data/name.txt', name)

//load from 'name.txt'                          .toString()
// nc('./data/name.txt', "utf8")
// console.log(name)

//plain object
//let data = { name: "Salad"}

//save to file
export const save = ( data, type ) => {
    data.type = type
    fs.writeFileSync(
        "./persistance/data/food.json",  //???
        JSON.stringify(data)
    )

}

//load from file
export const load = () => {

    let data = JSON.parse(
        fs.readFileSync(
            "./persistance/data/food.json"  //???
    ).toString()
    )
    //cautam cheia type in interiorul data = "type":"Food", obtinem map[data] care =    "Food": "./food/Food.mjs", 
    // const Clazz = require (map[data['type']])

    let obj = new Clazz(data.name)
    return obj

}

// read--->buffer --< String ---> { } ---> Food
