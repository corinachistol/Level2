//Javascript Errors and Error Handling
"use strict"
const variable = "Dave"
console.log(variable)   //-->ReferenceError

//Object..create()  //-->SyntaxError 

//SyntaxError cannot be catched , while Reference Error can be
//SyntaxError stops the script

// const name = "Dave"
// name = "Joe"
// console.log(name)    // -->TypeError

const makeError = () => {
    let i =  1;
    while(i <= 5){
        try{
            // const name = "Dave"
            // name= "Joe"
            //throw new Error("This is a error!")
            if (i % 2 !== 0){
                throw new Error("Odd number!")
            }
            console.log(`Even number: ${i}`)
        } catch(err) {   // catch block will execute  only if in try block there is an error. If there is Any code after error in try block, it will be not executed!!!!
            // console.error(err.name) //Type Error
            // console.error(err.message)  // Assignment to constant variable.
            console.error(err.stack)   // TypeError: Assignment to constant variable.  erro.name+err.message
            
        } finally{  // finally block is executing no matter what
            console.log(`...finally:${i}`);
            i++;
        }

    }
}

makeError()

function customError (message) {
    this.message = message;
    this.name = "Custom Error";
    this.stack = `${this.name}: ${this.message}`;
}
