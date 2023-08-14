import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';

import { getCityWeather, printCityWeather } from './app2.mjs'


const rl = readline.createInterface( { input, output } )

// const city = rl.question('Enter a city name ... ', (answer) => {
//             console.log(answer)
            
//         })

export const getCityName = () => {
    rl.question('Enter a city name ... ', (answer) => {
        getCityWeather((answer, ) => {
            printCityWeather (answer)
        })
        console.log(answer)
        
    })
}



