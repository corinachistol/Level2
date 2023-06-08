
class Element {
    constructor (tagName) {
        this.tagName   = tagName
        // referece to other elements
        this.parent    = null
        this.children  = []
        this.prev      = null
        this.next      = null

    }

    render() {
        let childFragment = ``
        this.children.forEach( child => childFragment += child.render() )

        return  `<${this.tagName}>${childFragment}</${this.tagName}>`
    }

    //HW1: Part1
    appendChild( child ) {
        if(child instanceof Element){
            this.children.push(child)

        } else{
            console.log('Only objects of Class Element are allowed!')
        }
    }
    //HW2: Part 2
    removeChild( child ) {
        if(child instanceof Element) {
            for( let i = 0; i < child.length; i++ ) {
                let found = Object.is( child, child[i] )
                if(found != undefined ) {
                    return found 
                }
            }
            this.children.splice(found, 1)
        }
        
    }
}

let parent = new Element("div")
let h1 = new Element("h1")
parent.appendChild(h1)
parent.appendChild(new Element("p"))
parent.removeChild(h1)
parent.removeChild(new Element("p"))

console.log(parent.render())