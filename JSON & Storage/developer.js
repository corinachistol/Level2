class Developer {
    constructor(name, experience, domains){
        this.name = name,
        this.experience = experience,
        this.domains = domains
    }

    toJSON() {       
        return JSON.stringify({
            name: this.name,
            experience : this.experience,
            domains: this.domains
        })
    }

    fromJSON(str){
        let copy = JSON.parse( str )
        console.log(copy)

        let text = "";
        for (let value  in copy ){
            text += copy[value] + " "
        }
        
        return text
    }
}

let dev1 = new Developer("John", 10, ["JS", "CSS"])