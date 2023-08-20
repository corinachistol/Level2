import fetch from "node-fetch";
import key from './config.json' assert { type: "json" }

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { error } from "node:console";

const rl = readline.createInterface({ input, output });

const getCity = async() => {
    const city = await rl.question('Enter a city name to find out the weather ...')
    return city   
}

//imediate invocation
(async function getCityWeather(){
    try{
        const city = await getCity()
        //console.log(typeof city) // string
        const URL = key.EXTENSION + key.HOST + key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`
        const res = await fetch(URL)
        console.log(res)
        const data = await res.json()

        let {
            main: {temp, temp_min, temp_max},
            wind:{speed},
            name
        } = data
       
        console.log(`>>>>>> In ${name} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
        setTimeout(getCityWeather, 1000)
     

    } catch(err) {
        console.log(err.message)
    }

})()