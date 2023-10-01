//classes
export class Payment {
    // readonly client: string;  //we can read this from inside as well from outside itself, but we cannot change it
    // private details: string;
    // public amount: number; // default modifier
    constructor(// asa format functioneaza atunci cind declaram access modifiers in front
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $ ${this.amount} for ${this.details}`;
    }
}
