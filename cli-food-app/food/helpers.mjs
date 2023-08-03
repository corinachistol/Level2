//menu functionality
import readline from 'readline'

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


export const printMenu = ( menu, cb ) => {
    
    menu.forEach(item => console.log(item.print()))

    rl.question('Choose >>>>>', (option)=>{
        cb( option )
    })

}

export const printMessage = (message) => {
    console.log(`${message}  >> `)
}