import { HasFormatter } from "../interfaces/hasFormatter.js" 

//classes
export class Invoice implements HasFormatter {
    // readonly client: string;  //we can read this from inside as well from outside itself, but we cannot change it
    // private details: string;
    // public amount: number; // default modifier

    constructor( // asa format functioneaza atunci cind declaram access modifiers in front
        readonly client: string,
        private details: string,
        public amount:number
        ){}
    format(){  // this.details inside the class method can be accessed 
        return  `${this.client} owes $ ${this.amount} for ${this.details}`
    }
}