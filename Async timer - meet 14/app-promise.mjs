//SRP SingeResponsability Principle
//promise example
import https from 'node:https'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// acesta functie ne da cuvintul cautat
// const getDefinition = (word) => {
//     const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

//     return new Promise( (resolve, reject)=> {

//         https.get(URL, (response)=> {

//             let data = []

//             response.on('data', (chunk)=> {data.push(chunk)})

//             response.on( 'end', () =>{
//                 let buffer = Buffer.concat(data)
//                 //console.log(buffer)  //<Buffer 5b 7b 22 77 6f 72 64 22 3a 22 68 65 6c 6c 6f 22 2c 22 70 68 6f 6e 65 74 69 63 73 22 3a 5b 7b 22 61 75 64 69 6f 22 3a 22 68 74 74 70 73 3a 2f 2f 61 70 ... 1957 more bytes>. Acelasi buffer cind la functii nu scrii "utf8"
//                 let json_string = buffer.toString()
//                 //console.log(json_string)
//                 let json = JSON.parse(json_string)
//                 //console.log(json)
//                 resolve(json) // obiect
//                 //Where to next   --> Never in this function ,because of SRP
//                 //HOW ???
                
//                 // callback --->arg
//                 // promise ---> solve,reject
//                 // async/await ---> return
//             })
//             response.on( 'error', (error) => reject(error) )

//         } )

//     } )
// }

const printData = (json) => {
    console.log(json)
}


//async
////////////////////////////////
const getWord = async() => {
    const word = await rl.question('Enter a word to find out its definition ...')
    // rl.close()
    
}


const getDefinition = async () => {

    const word =  await getWord()
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    return new Promise( (resolve, reject)=> {

        https.get(URL, (response)=> {

            let data = []

            response.on('data', (chunk)=> {data.push(chunk)})

            response.on( 'end', () =>{
                let buffer = Buffer.concat(data)
                //console.log(buffer)  //<Buffer 5b 7b 22 77 6f 72 64 22 3a 22 68 65 6c 6c 6f 22 2c 22 70 68 6f 6e 65 74 69 63 73 22 3a 5b 7b 22 61 75 64 69 6f 22 3a 22 68 74 74 70 73 3a 2f 2f 61 70 ... 1957 more bytes>. Acelasi buffer cind la functii nu scrii "utf8"
                let json_string = buffer.toString()
                //console.log(json_string)
                let json = JSON.parse(json_string)
                //console.log(json)
                resolve(json) // obiect
                //Where to next   --> Never in this function ,because of SRP
                //HOW ???
                
                // callback --->arg
                // promise ---> solve,reject
                // async/await ---> return
            })
            response.on( 'error', (error) => reject(error) )

        } )

    } )
}


///////////////////////////////////////////////////////////
// getDefinition("hello", printData)


//Promise
getDefinition()
    .then( json => {
        printData(json) 

        return setTimeout( ()=> {
            new Promise((resolve,reject) =>{
            resolve(getDefinition())
           })
        },500 )
    })
    .catch(err => console.error("Error!;",err) ) 


//async/ await
// try{
//     let word = await getWord()
//     //let json = await getDefinition(word)
//     console.log(word)
 

// }catch(err){
//     console.error("Error!;",err)
// }
