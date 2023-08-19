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


const getDefinition = async () => {

    const word =  await getWord()
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
    console.log(json)
}

//Promise

const step = () => {

    getDefinition()
        .then( json => {
            printData(json) 

            step()
    
        })
    .catch(err => console.error("Error!;",err) ) 

}

step()



//async/ await
// try{
//     let word = await getWord()
//     //let json = await getDefinition(word)
//     console.log(word)
 

// }catch(err){
//     console.error("Error!;",err)
// }
