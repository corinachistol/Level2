"use strict";
let greet;
// greet = "hello"
greet = () => {
    console.log("helli again");
};
//? =>optional parameter   default parameter written at the end
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
// o functie in ts returneaza 'void' atunci cind functia nu returneaza nimic, 
// void = complete lack of value
// undefined would be like an optional parameter that wasn't defined 
add(5, 10, "20");
const minus = (a, b) => {
    return a + b;
};
//cind in functie declaram tipul argumentilor, automat rezultatul va fi de acelasi tip  si nu mai poate fi redeclarat
// explicit mai poate fi decalarat rezultatul asa  --- (a:number, b: number): number
let result = minus(10, 7);
// result = "somethinf elf"
