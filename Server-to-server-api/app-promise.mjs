import http from 'node:http'
import key from './config.json' assert { type: "json" }

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const getCity = async () => {
    const city = await rl.question('Enter a city name to find the weather...',answer => {
    })
    return city   
}

//cream o functie care ne va returna orasul
const getCityWeather = async () => {
    const city = await getCity()

    const options = {
        host: key.HOST,
        path: key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`,
        port: 80,
        method: "GET"
    }

    return new Promise( (resolve,reject)=> {

        http.get(options, (response) => {
            //console.log( `STATUS: ${response.statusCode}`)
    
            if(response.statusCode !== 200){
                console.log( `Wrong City Name: ${response.statusCode}: ${response.statusMessage}`)
                rl.close()
            }else{
                response.setEncoding('utf8')
                let rawData = ""
                response.on('data', (chunk)=>{ rawData += chunk})
                response.on('end', ()=>{
                    const parsedData = JSON.parse(rawData)
                    resolve(parsedData)                
                })
                response.on('error', error => console.log(error))

            }
            
        })
    })
 
}

// const printCityWeather = (parsedData) => {
    // let {
    //     main: {temp, temp_min, temp_max},
    //     wind:{speed},
    //     name
    // } = parsedData

//     console.log(`>>>>>> In ${name} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
// }

const step = () => {
    getCityWeather()
        .then(parsedData => {
            let {
                main: {temp, temp_min, temp_max},
                wind:{speed},
                name
            } = parsedData

            console.log(`>>>>>> In ${name} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
        
            
            step()

         })
    .catch(err=> console.error("Error!!!", err))
}
step()


