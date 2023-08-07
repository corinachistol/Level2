//video 00015__9

export class Food {
    constructor(name) {
        this.name = name
    }

    print() { 
        return `-------------------------------\n` + 
               `${this.name}                    \n` +
               `---------------------------------` 
        }
}
