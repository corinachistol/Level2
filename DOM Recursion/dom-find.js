const find = (element, what) => {
    let content = element.childNodes[0].textContent.trim()
    console.log(
        `visiting '${content}'`
    )

    if( what == content ) {
        return element
    }

    //HW3: refactor the code using Array.forEach()
    for (let index = 0; index < element.children.length; index++) {
        let found = find(element.children[index], what);
        if (found != undefined) {
            return found;
        }
    }
}

//////using DFS///////
let found = find(root,"1.2.1")
console.log(`FOUND it in element:`, found)