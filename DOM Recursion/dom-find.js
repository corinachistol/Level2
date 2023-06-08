const find = (element, what) => {
            //extragem textul din element si o memoram in variabila content
    let content = element.childNodes[0].textContent.trim()
    console.log(
            //afisam in consola textul din element
        `visiting '${content}'`
    )
            // daca textul cautat coincide cu continutul divului  --> returneaza elementul gasit si intreruperea  recursiei
    if( what == content ) {
        return element
    }

    //HW3: refactor the code using Array.forEach()

            //ciclul se plimba prin toti copii elementului 
    // for (let index = 0; index < element.children.length; index++) {
    //         //apelam functia recursiva si daca gaseste divul cautat , il culegem in variabila found
    //     let found = find(element.children[index], what);
    //     if (found != undefined) {
    //         return found;
    //     }
    // }
 
    // let found = null
    // Array.from(element.children).forEach( child => {
    //     found = find(child, what) ?? found
    // } )
    // return found

    Array.from(element.children).find( child => {
        return find(child,what)
        
    } )
}

//////using DFS///////
let found = find(root,"1.2")
console.log(`FOUND it in element: `, )