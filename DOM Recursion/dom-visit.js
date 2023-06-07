const visit = (element) => {
    //HW1:explain "element = accesam primul element, in cazul nostru root
    //              .childNodes[0]  = childNodes returneaza toata lista de noduri pe care o include root (text,element(div-uri),comments, ). In cazul nostru ne returneaza " 1 
    //                                  element.children = ne returneaza doar elementul, adica tagul (div)
    //              .textContent    = extrage tot continul (rind nou, spatii + insasi text) din pasul anterior ---> '\n        1\n        '
    //              .trim()"        = taie toate spatiile goale de la inceput si de la sfirsit, lasing doar textul propriu zis, ' 1'
    console.log(
        // obtinem textul curat din fiecare 
        `visiting ${element.childNodes[0].textContent.trim()}`
    )

    //HW2:refactor the code using Array.forEach()
    let children = element.children
        //transform HTML Collection into Array
        //children = [...children]
    Array.from(children).forEach( (child) => { visit (child)})
    //children.forEach( (child,index) => { console.log( `visit ${child[index]}` )
        
    // });
    // for(let index = 0; index < element.children.length; index++ ){
    //     visit(element.children[index])
    // }
}

visit(root)