//1.
let head = {
    glasses: 1
}

let table= {
    pen: 3,
    __proto__: head
}

let bed ={
    sheet: 1,
    pillow: 2,
    __proto__: table

}

let pockets = {
    money: 2000,
    __proto__: bed
}

//2. 
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};


//3.
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach:[],
    __proto__: hamster
};
 
let lazy = {
    stomach:[],
    __proto__: hamster
}

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>




