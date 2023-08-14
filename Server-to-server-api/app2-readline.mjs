import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';

import { getCityWeather, printCityWeather } from './app2.mjs'


const rl = readline.createInterface( { input, output } )


function  mainLoop() {
    rl.question('Enter a city name ... ', (answer) => {
        console.log(answer)

        getCityWeather(answer,printCityWeather) 
            
        
    })
 
    
}

mainLoop()


//getCityWeather(printCityWeather)



