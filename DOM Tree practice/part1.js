
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

    appendChild(child) {
        if(child instanceof Element){
            this.children.push(child)

        } else{
            console.log('Only objects of Class Element are allowed!')
        }
    }
}

let root = new Element('html')
root.children.push(new Element ('head'))
root.children.push(new Element('body'))

let p = new Element('p')

root.children[1].appendChild(p)
console.log(p)


console.log(root.render())