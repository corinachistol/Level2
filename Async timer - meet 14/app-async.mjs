//SRP SingeResponsability Principle
//promise example
import https from 'node:https'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


//async
////////////////////////////////
const getWord = async() => {
    const word = await rl.question('Enter a word to find out its definition ...')
    return word   
}


const getDefinition = async (word) => {

    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    return new Promise( (resolve, reject)=> {

        https.get(URL, (response)=> {

            let data = []

            response.on('data', (chunk)=> {data.push(chunk)})

            response.on( 'end', () =>{
                let buffer = Buffer.concat(data)
                let json_string = buffer.toString()
                let json = JSON.parse(json_string)
                resolve(json) // obiect
            })
            response.on( 'error', (error) => reject(error) )

        } )

    } )
}

const printData = (json) => {
    return new Promise ( (resolve,reject)=>{
        resolve(json)
    } )
}


//async/ await
const loop = async () => {
    try{
        const word =  await getWord()
        const definition = await getDefinition( word)
        const print = await printData(definition)

        setTimeout( loop, 1000)

        console.log(print)
    }catch(err){
        console.error("Error!;",err)
    }
}

loop()

