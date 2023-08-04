// import {menu} from './food/menu.mjs'
// import { printMenu, printMessage } from './food/helpers.mjs'

import { menu, printMenu, printMessage } from './food/index.mjs'
//import './client'
//console.log(menu)

//ciclu asincron
function mainLoop() {
    const validOptions = menu.forEach( element => console.log (element.id) )  // 1 2 3
    console.log( typeof validOptions) //undefined
    
    printMenu( menu, (option) => {
        

        let optionInt = parseInt(option)
        console.log(typeof optionInt)

        if(optionInt !== "number" || !validOptions.includes(option) ){
            console.log('Invalid input')
            //HW4: !!! string input --> integer number
            //          + check  if wrong option --> console error  --> inexistent option
        } else{
            console.log("You've chosen ", optionInt)
        }
        setTimeout(mainLoop,500) 
    
        
    } )
}

mainLoop()


