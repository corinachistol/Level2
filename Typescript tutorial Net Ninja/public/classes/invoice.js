//classes
export class Invoice {
    // readonly client: string;  //we can read this from inside as well from outside itself, but we cannot change it
    // private details: string;
    // public amount: number; // default modifier
    constructor(// asa format functioneaza atunci cind declaram access modifiers in front
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
