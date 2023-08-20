//SRP SingeResponsability Principle
//o functie pentru ceva concret
// mai mutle functii simple si pe urma incercam sa le combinam/complcam
import https from 'node:https'
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


// acesta functie ne da cuvintul cautat
// callback based
const getDefinition = (word, callback) => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    // node fetch   - promise
    // axios        - promise
    // http module  --> callback + event style 

    //pregatim un req  catre server  (da-mi raspunsul de pe adresa URL)
    //                  IncomingMessage
    //                     v
    https.get(URL, (response)=>{

        let data = []

        // O ALTA VARIANTA DE A ASAMBLA STRING 
        // response.setEncoding('utf8')
        // response.on( 'data', (chunk) => { console.log(JSON.parse(chunk)) } )
        
        response.on( 'data', (chunk) => { data.push(chunk) } )  //Uint8Array
        
        /*
        data = [  < Array 
            [1,2,3,4....,n]  < Uint8Array
            [1,2,3...n]     < Uint8Array
            [1,2]           < Uint8Array
        ] 
        
        [1,2,3,4....,n,1,2,3...n,1,2
        
        */
        response.on( 'end', () =>{
            let buffer = Buffer.concat(data)
            //console.log(buffer)  //<Buffer 5b 7b 22 77 6f 72 64 22 3a 22 68 65 6c 6c 6f 22 2c 22 70 68 6f 6e 65 74 69 63 73 22 3a 5b 7b 22 61 75 64 69 6f 22 3a 22 68 74 74 70 73 3a 2f 2f 61 70 ... 1957 more bytes>. Acelasi buffer cind la functii nu scrii "utf8"
            let json_string = buffer.toString()
            //console.log(json_string)
            let json = JSON.parse(json_string)
            console.log(json) // obiect
            //Where to next   --> Never in this function ,because of SRP
            //HOW ???
            callback(json)   // strong coupling
            // callback --->arg
            // promise ---> solve,reject
            // async/await ---> return
        })
        response.on( 'error', error => console.log(error) )
    })

}


const printData = (json) => {
    console.log(json)
}

function loop() {
    rl.question('Enter a word to find its definition...', (answer)=> {
        //console.log(typeof answer)
        // if(!answer || answer == ""){
        //     throw new Error("Invalid word!!! Please try again")
        // }else{
        //     getDefinition(answer, printData)
        //     setTimeout( loop, 1000 )
        // }
        
        let r = /[a-zA-Z]/g
        if(answer.match(r ) ){
            getDefinition(answer, printData)
            setTimeout( loop, 1000 )
        }else{
            throw new Error("Invalid word!!! Please try again")
        }
    } )
 
}
loop()




///////////////////////////////////////////////////////////
// usage as callbacks
// getDefinition("hello", printData)

