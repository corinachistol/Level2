import fetch from "node-fetch";
import key from './config.json' assert { type: "json" }


(async (city) => {
    const URL = key.EXTENSION + key.HOST + key.PATH + `?q=${city}&appid=${key.KEY}&units=metric`
    try{
        const res = await fetch(URL)
        const data = await res.json()
        let {
            main: {temp, temp_min, temp_max},
            wind:{speed}
        } = data
        console.log(`>>>>>> In ${city} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
        //console.log(data)

    } catch(err) {
        console.log(err.message)
    }

})("Chisinau")