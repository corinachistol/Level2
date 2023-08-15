import axios from 'axios';

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

const getDefinition = async (word) => {
    try{
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        console.log(response.data)
    } catch (err){
        console.log(err.response)
    }
}




getDefinition('hello')