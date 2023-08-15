import axios from 'axios'
import key from './config.json' assert { type: "json" }
//console.log(key.PATH)


// const getCityWeather = (city) => {
//     const URL = key.EXTENSION + key.HOST + key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`
//     //console.log(URL)

//     axios.get(URL)
//         .then( res => {
//             //console.log(res.data)
//             let {
//                 main: {temp, temp_min, temp_max},
//                 wind:{speed}
//             } = res.data
//             console.log(`>>>>>> In ${city} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
//         } )
//         .catch(err => {
//             console.log(`Error: ${err.message}`)
//         })
// }

const getCityWeather = async (city) => {
    const URL = key.EXTENSION + key.HOST + key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`
    try{
        const response = await axios.get(URL)
        //console.log(response.data)
        let {
            main: {temp, temp_min, temp_max},
            wind:{speed}
        } = response.data
        console.log(`>>>>>> In ${city} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
    } catch(err) {
        console.log(err.response)
    }
} 


getCityWeather("Chisinau")



