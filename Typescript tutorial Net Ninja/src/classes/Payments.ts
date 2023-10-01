import { HasFormatter } from "../interfaces/hasFormatter.js" 

//classes
export class Payment implements HasFormatter {
    // readonly client: string;  //we can read this from inside as well from outside itself, but we cannot change it
    // private details: string;
    // public amount: number; // default modifier

    constructor( // asa format functioneaza atunci cind declaram access modifiers in front
        readonly recipient: string,
        private details: string,
        public amount:number
        ){}
    format(){  // this.details inside the class method can be accessed 
        return  `${this.recipient} is owed $ ${this.amount} for ${this.details}`
    }
}