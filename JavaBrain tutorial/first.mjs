import { add } from './add.mjs'  // acesta metoda doar importa file si il executa si pe urma il arunca undeva
// de aceea , aceasta metoda nu functioneaza , pt ca require nu are acces la variabile , function definitions, etc
//add(10,20)

function greet(name) {
    console.log(`Hello there, ${name}`)

}

greet("Corina")

console.log(add(10,20) )


