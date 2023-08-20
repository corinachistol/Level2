import http from 'node:http'
import key from './config.json' assert { type: "json" }

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


//cream o functie care ne va returna orasul
const getCityWeather = (city, cb ) => {

    const options = {
        host: key.HOST,
        path: key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`,
        port: 80,
        method: "GET"
    }

    const req = http.get(options, (response) => {
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
                cb(parsedData)
                
            })
            response.on('error', error => console.log(error))

        }
        
    } )

 
   
}

const printCityWeather = (json) => {
    let {
        main: {temp, temp_min, temp_max},
        wind:{speed},
        name
    } = json

    console.log(`>>>>>> In ${name} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
}


const getCity = () => {
    const city = rl.question('Enter a city name to find the weather...',answer => {
        getCityWeather(answer,printCityWeather)
        setTimeout(getCity, 1000)
    })
    
}
getCity()
