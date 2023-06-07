//module that contains the logic

//CRUD

// - show
// - add
// - update
// - remove


//DOM helpers
const newElement = (type, classList = [], children = []  ) => {
    
    let element = document.createElement(type)

    classList.forEach(
        className => element.classList.add(className)
    )
    children.forEach(child => element.appendChild(child))
    
    return element
}

const newTextNode = (text) => {
    return document.createTextNode(text)
}

//let newUser = {};


//CRUD functions

const addUser = (data, selector) => {
    let root = document.querySelector( selector )
    root.appendChild(
        newElement('tr', [],
            Object.keys( data[0] ).map( 
                ( key, index ) => {
                    let input  = newElement('input')
                    let button = newElement('button')
                    input.setAttribute('placeholder', key)
                    input.setAttribute('value', key)
                    document.body.appendChild(input) // ori aici trebuie append child (td), td-> tr, tr->table?
                    
                    
                    button.innerHTML  = "✔"
                    button.classList.add('checked')
                    //varianta  1 callback
                    button.addEventListener('click', function getAlert (e){
                        Array.from(children).forEach( c => {
                              //console.log(c.target.value) // asa nu e corect
                                console.log(c.value)
                            })
                      
                          alert("User Added!")
                    } )

                        //varianta2 prin mentionarea unei functii ajutatoare
                       // button.addEventListener('click', getAlert)
                      
                    let children = [
                        input
                    ]
                  
                    if(index == 2) {
                        children.push(button)
                    }

                    //let inputs = Array.from(input).forEach( (elem, idx) => newUser[`val${idx}`] = elem )

        

                    //Array.from(children).forEach( i => console.log(i.value)) //-> nu apare nimic in consola
                    //Object.values(Array.from(input)) //-> nu apare nimic in consola
                    
                   // console.log(input.value)  // -> 3
                    //children.forEach( input => console.log(input.value) ) // ->4
                    //children.forEach( input => console.log(input)) // -> ne arata input tag cu placeholder attribute
                    //children.map( (child, value) => console.log(child))
                    
                    return newElement('td', [], children)

                    //HW1:
                    //  * in the last td, add a button next to the input
                    //  * with the text inner = "save" or "checkmark"
                    //  * addEventListener  
                    //  * alert when clicking this button
                    //  * collect 3 values each from an input  .value
                    //  * show them in console
                }
            )
        )
    )
}

function getAlert()  {

     Array.from(children).forEach( c => {
      //  e.target.value = c.value
        console.log(c.value)})

    alert("User Added!")
}


const showAsTable = ( data, selector ) => {
    let root = document.querySelector( selector )

    root.appendChild(
        newElement('table', ["data-table"],
            data.map( 
                user => newElement('tr', [], 
                    Object.values(user).map( value => newElement('td', [], [newTextNode(value)]))
                ) )

        )
    ) 

    
}

showAsTable(data, 'section')


/*

    document
    |
    \body
        |
        \header
        |
        |
        |
        \section  < ------ root  ,variabila root va tine legatura cu o sectiune reala din document
        |
                Aceste obiecte nu eu nici o legatura cu DOM
                \table
                    |
                    \tr
                        |
                        \td
        |
        |
        \footer
*/


/*
*/ 