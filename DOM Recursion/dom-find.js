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

    let children = element.children
    let shouldBreak = false
    Array.from(children).forEach( child => {
        let found = find(child, what);
        if( found != undefined){
            return found
        }
        return child
        
        
    } )
}

//////using DFS///////
let found = find(root,"1.2.1")
console.log(`FOUND it in element:`, found)