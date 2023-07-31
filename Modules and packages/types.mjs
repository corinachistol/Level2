// function checking typeof values
import temperature from './temperature.json' assert { type:"json" }
console.log(temperature)
console.log(typeof temperature)


const isNumber = (obj) => {
    for( let i=0; i < obj.length; i++){
        if(typeof obj[i] == Array){
            console.log(obj[i])
            //return true
            
            let filtered = obj[i].filter( element =>{
                typeof element !== Number
            } )
            return filtered
        }
                
    }
    // let filtered = obj.filter( element => {
    //     typeof element !== Number
    // } )
    // return filtered
}

console.log(isNumber({ temperature }))