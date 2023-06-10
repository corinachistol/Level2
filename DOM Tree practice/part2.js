
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
    //HW2: Part 2   // prin for merge
    removeChild( child ) {
        if(child instanceof Element) {
            for( let i = 0; i < this.children.length; i++ ) {
                if( Object.is( child, this.children[i] )  ){

                }
            
                return this.children.splice(i, 1)
            }
                
        }
        
    }

        //prin find merge
    // removeChild(child) {  // child este de tip Obiect ,Element ()
    //     if (child instanceof Element){     // daca child este de tip Element
    //        this.children.find( (child,i) => {      //cauta in arayul children elementul child de pe pozitia i
    //         if( Object.is(child, this.children[i]) ) {  // Object.is returneaza true = found , daca elementul care dorim sa-l stergem coincide cu un copil din colectia children
            
    //         }
            
    //         return this.children.splice(i,1)  // stergem 1 element copil de pe pozitia i gasit din arrayul children
    //         } )
            
    //     }
        
    // }
}

let parent = new Element("div")
let h1 = new Element("h1")
parent.appendChild(h1)
parent.appendChild(new Element("p"))
parent.removeChild(h1)
parent.removeChild(new Element("p"))

console.log(parent.render())
