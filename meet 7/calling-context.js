

//JS / functional & OOP

// * this
// * binding context

let data ={
    info: "This is some text...",
    print: function() {
        console.log(this.info)
    }
}

function fOriginal(arg){
    console.log(arg,this)
}

//let fVariant = fOriginal.bind("This is this",1000)

fOriginal.call("This is this",1000)