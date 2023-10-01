//interfaces allows to enforce (impune,aplica)  a certain structure of a class or an object. We can use it to describe what properties and methods , the type of those properties and methods are . 
//We don't use interfaces to create and generate new object, 
//We use it only to enforce a certain structure within an object 
interface IsPerson {
    name: string;
    age:number;
    speak(a:string): void;
    spend(a:number): number;
} 

const me: IsPerson = {
    name:"shaun",
    age:30,
    speak(text:string):void {
        console.log(text)
    },
    spend(amount:number): number {
        console.log('I spend', amount)
    }
   
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}

greetPerson(me)

console.log(me)
