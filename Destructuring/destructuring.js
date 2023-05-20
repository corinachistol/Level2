const game = {
    title: "Donkey Kong Country",
    platform:"SNES",
    year:1994,
    characters: {
        main: "Donkey Kong",
        side: "Diddy Kongs",
        boss: "King Root"
    }
}

// let title = game.title;
// let platform = game.platform;
// let year = game.year;
// console.log(title)

//Object Destructutring

let {
    title, 
    platform, 
    year: release, 
    characters,      //destructurizam nested object
    characters:{main, side, boss}  // desctructurizam doar valorile 
} = game

//console.log(title, platform, release)
console.log(main, side, boss)  // ---> Donkey Kong Diddy Kongs King Root
console.log(characters)        // ---> {main: 'Donkey Kong', side: 'Diddy Kongs', boss: 'King Root'}

let {length } = "Dev Dreamer"

console.log(length)


//Array Destructuring

const book = [ 
    "The last Battle", 
    "C.S LEwis", 
    "1956",
    ["Shift", "Puzzle", "Tirian"],
]
// let title1 = book[0]
// let author = book[1]
// let year1 = book[2]

let [title1, author , year1, [a,b,c] ] = book

console.log(title1)
console.log(author)
console.log(year1)
console.log(a,b,c)  // -->Shift Puzzle Tirian
