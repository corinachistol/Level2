import http from 'node:http'
import key from './config.json' assert { type: "json" }

import { getCityName } from './app2-readline.mjs'
//console.log(getCityName())

const city = getCityName()
console.log(city)


//let city = "Chisinau"


export const options = {
    host: key.HOST,
    path: key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`,
    port: 80,
    method: "GET"
}

//cream o functie care ne va returna orasul
export const getCityWeather = (cb ) => {
    const req = http.request(options, (response) => {
        //console.log( `STATUS: ${response.statusCode}`)

        if(response.statusCode !== 200){
            console.log( `Wrong City Name: ${response.statusCode}: ${response.statusMessage}`)
        }
        
        response.setEncoding('utf8')
        let rawData = ""
        response.on('data', (chunk)=>{ rawData += chunk})
        response.on('end', ()=>{
            const parsedData = JSON.parse(rawData)
            cb(parsedData)
            //console.log(parsedData)
            // let {
            //     main: {temp, temp_min, temp_max},
            //     wind:{speed}
            //   } = parsedData
            //   console.log(`>>>>>> In ${city} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
        })
        response.on('error', error => console.log(error))
    } )

    req.end()
   
}

export const printCityWeather = (json) => {
    let {
        main: {temp, temp_min, temp_max},
        wind:{speed}
    } = json

    console.log(`>>>>>> In ${city} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
}

const loop = () => {
    getCityName()
    getCityWeather(printCityWeather)
}

loop()



