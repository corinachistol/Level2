//use file system
//video 00015_12
import fs from 'fs'
import map from './map.mjs'



//save to "name.txt"
// let name = "Salad"
// fs.writeFileSync('./data/name.txt', name)

//load from 'name.txt'                          .toString()
// nc('./data/name.txt', "utf8")
// console.log(name)

//plain object
//let data = { name: "Salad"}

//save to file
export const save = ( object, path  ) => {
    object.type = object.constructor.name
    fs.writeFileSync(
        path,  //???
        JSON.stringify(object)
    )

}

//load from file
export const load = async (path) => {

    let data = JSON.parse(
        fs.readFileSync(
            path  //???
    ).toString()
    )
    
    //cautam cheia type in interiorul data = "type":"Food", obtinem map[data] care =    "Food": "./food/Food.mjs", 
    // const Clazz = require (map[data['type']])
    
    const  module = await import( map[data['type']] )
    
    const Clazz = module[data['type']]
    console.log(Clazz)
    let obj = new Clazz(data.name)
    return obj

}

// load()

// read--->buffer --< String ---> { } ---> Food
