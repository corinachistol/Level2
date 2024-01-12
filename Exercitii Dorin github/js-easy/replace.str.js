//  https://github.com/dorinesinenco/EDUQATION/blob/master/web/js-easy/basics/types/string/replace.wd.str.ro.md
// utilizand metoda (functia) tipului de date String - .split() sa se creeze o aplicatie care separa toate cuvintele dintr-o propozitie:

// intr-un Array, luand in consideratie ca in propozitie cuvintele vor fi delimitate printr-un singur spatiu!

// ca rezultat se va obtine un Array!!!.

// ATENTIE! toate cuvintele trebuie sa fie aduse la forma nominala - cu litere mici

// Prin urmare, executia programului ar trebui sa arate asa

// ORIGINAL PHRASE: Javascript is a very advanced programming language

// WORDS: [javascript,is,a,very,advanced,programming,language]

let phrase = "Javascript is a very advanced programming language"

let splitted = phrase.split(' ') // array
let lowerCase = splitted.map(w=>w.toLowerCase())
console.log(lowerCase)

let lower_case = phrase
                    .split(' ')
                    .map(w=>w.toLowerCase())
console.log(lower_case)