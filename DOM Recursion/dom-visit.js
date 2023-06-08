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
        
    // });
    // for(let index = 0; index < element.children.length; index++ ){
    //     visit(element.children[index])
    // }
}

visit(root)


    /*
    
        DOM 
            element{
                children[
                    0------> element{}
                    1------> element{}
                ]
            }
        
                                ^   ^
                                ^   ^
        Array [                 ^   ^
            0-------------------    ^
            1-----------------------
        ]

## DIFERENTA INTRE FOR  vs forEACH()

        c1: visit(root)
         ^
         ^            for() /  for-ul este invizibil, se face o legatura directa intre primul apel si urmatoarele
         ^          
         ^           Atunci cind lucrezi cu control flow(for, while,if,etc.), ai recursia pura si se autoapeleaza functia
         ^
         ^           c2: visit(child_0)
         ----------  c3: visit(child_1)
        return-ul din c2 si c3 se duce in functia initiala


    
        c1: visit(root)

                    Aici recursia e prin functia intermediara
                    .forEach()  Apare un strat intermediar intre primul apel al functiei si urmatoarele
                    ^
                    ^    call intermediate: arrow()
                    ^
                    ^        c2: visit(child_0)
              return^ -------c3: visit(child_1)
        de aici se duce direct in foraEach() care nu are ce face cu el si de fapt returnam nimic 
    
    
    */

