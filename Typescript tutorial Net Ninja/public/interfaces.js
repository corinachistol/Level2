"use strict";
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
