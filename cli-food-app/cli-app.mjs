// import {menu} from './food/menu.mjs'
// import { printMenu, printMessage } from './food/helpers.mjs'

import { menu, printMenu, printMessage } from './food/index.mjs'
//import './client'
//console.log(menu)


//ciclu asincron
function mainLoop() {
    const validOptions =  menu.map( element => { return element.id  } ) // [ 1, 2, 3 ]
    //console.log(validOptions) 
    
    printMenu( menu, (option) => {
        

        let optionInt = parseInt(option)
        //console.log(typeof optionInt)

        if( typeof optionInt === "number"  && validOptions.includes(optionInt) ){
            console.log("You've chosen ", optionInt)
            //HW4: !!! string input --> integer number
            //          + check  if wrong option --> console error  --> inexistent option
        } else{
            console.log("Inexistent option. Please select again")
        }
        setTimeout(mainLoop,500) 
    
        
    } )
}

mainLoop()


