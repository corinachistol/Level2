// video 00016__1__part 1 server to server
import http from 'http';
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process';

import  key  from './config.json' assert { type: "json" }
console.log(key.KEY)
console.log(key.PATH)
console.log(key.HOST)
//console.log(http)

//HW1
//  - read city name from console realine
//  - print to console (temp,+min max, wind,...) 
// make it interactive loop
//  - debugg/ prevent  errors
//let city = "Chisinau"

const rl = readline.createInterface({ input, output })

// const printWeather = () =>{
//   rl.question("Input a city name...")
// }

// async function callback() {
//   try{
//     const answer = await rl.question("Input a city name...")


//   }catch(error){

//   }
// }

const answer = await rl.question("Input a city name...")
  // .then( (res)=>{
  //   res.setEncoding('utf8')
  //   console.log(res) })
  // .then ( ()=>{
  //   res.on('data', (chunk)=> {
  //     const data = JSON.parse(chunk)
  //     console.log(data)
  //   })
  // })
  // .then( () => {
  //    res.on('end', ()=> {
  //     console.log('API response ended')
  //   })
  // })
  // .catch( ()=> {
  //   res.on('error', ()=> {
  //     console.log('API response  with error')
  //   })
  // })
    

//const answer = rl.question("Input a city name...")


const callback = ( res ) => {   // <<<< res - readable stream
  //console.log( res )
  if( res.statusCode !== 200){
    console.log( `Wrong City Name: ${res.statusCode}: ${res.statusMessage}`)
  } else{
    res.setEncoding('utf8')
    res.on('data', (chunk)=> {
      // console.log('API response with data' )
      // console.log(chunk)
      const data = JSON.parse(chunk)
      let {
        main: {temp, temp_min, temp_max},
        wind:{speed}
      } = data
      console.log(`>>>>>> In ${answer} city there are ${Math.round(temp)}C with a minimum temperature of ${Math.round(temp_min)} and maximum ${Math.round(temp_max)}. The speed of the wind is ${Math.round(speed)}km/h`)
    })

    setTimeout(callback, 500)

    res.on('end', ()=> {
      console.log('API response ended')
    })
    res.on('error', ()=> {
      console.log('API response  with error')
    })
  

  }


  //BIND EVENT HANDLERS
}


//pegatim  un req cu optiunile din obiect
//http module are un debugger inclus
const req = http.request({
    host: key.HOST,
    path: key.PATH + `?q=${answer}&appid=${key.KEY}&units=metric`,
    port: 80,
    method: "GET"
}, callback)



// req.end()

//req = writable stream --->


// req.on('connect', ()=>{
//     console.log('>>>> got connected!')
// })
// req.on('information', (info) => {
//     console.log(`>>> got some info!`);
//   }); 


//does this send a request?
//Video 00016_3__part2
// 1 Node request build in
// 2 node --> npm debugger
// 3 OS related(linux)

//Principii importante pentru developer to KNOW
// 1. To work with EVENTS any type
// 2. How to work with callbacks or to avoid them if possible -fetch await
// 3. request life cycle


