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

    fromJSON(value){
        return JSON.parse( value )

    }
}

let dev1 = new Developer("John", 10, ["JS", "CSS"])
