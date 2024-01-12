// Functii, argumenti
// Functiile reprezinta o parte importanta din Javascript, pentru ca in JS foarte des se aplica paradigma de programare functionala!

// sa presupunem ca aveti urmatorul cod
function sayHello( language ){
    if(language == "en"){
        return "Hello"
    }else if(language =="ro"){
        return "Salut"
    }else if(language =="ru"){
        return "Privet"
    }
}

function sayHello( language ){
    switch(language){
        case 'en': return "Hello";
        case 'ro': return "Salut";
        case 'ru': return "Privet";
        default: return "Not supported language";
    }
}

sayHello('en')
// sa se completeze codul functiei astfel incat aceasta sa afiseze:
// Hello daca este apelata asa sayHello("en")
// Salut daca este apelata asa sayHello("ro")
// Привет daca este apelata asa sayHello("ru")
// HINT - utilizati constructia if/else sau switch/case pentru a realiza logica functiei