import axios from 'axios';
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const getWord = async () => {
    const word = await rl.question('Enter a word...')
    return word
}

// const getDefinition = (word) => {
    
//     axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//         .then( response => {
//             console.log(`Status code: ${response.status}`)
//             //console.log(Object.getPrototypeOf(response.data))
//             console.log(response.data)
//         })
//         .catch( err => {
//             console.log(`Error: ${err.message}`)
//         } )

// }

const getDefinition = async () => {
    try{
        const word = await getWord()
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        console.log(response.data)
        setTimeout(getDefinition, 1000)
    } catch (err){
        console.log(err.response)
    }
}

getDefinition()