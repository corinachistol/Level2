const user = {
    firstName: "Maria",
    country: "Moldova",
    toDos: {
        todo1: "Do the shooping",
        todo2: "Play some games"
    }
}

let {
    firstName, 
    country, 
    toDos, 
    toDos:{todo1, todo2}
} = user

console.log(firstName, country, toDos)
console.log(firstName, country, todo1, todo2 )

//Create an array with a list of any values and use the Destructuring Assignment to desctructure these values, log to the console.
//Add a nested array with any three values, and add this to the destructuring whilst skipping the second value.Log to the console
const books = [
    "The Magician Nephew",
    "The Lion, the Witch and the Wardrobe",
    "The Horse and his Boy",
    [
        "Prince Caspian",
        "The Voyage of the Dawn Treader",
        "The Silver Chair",
        "The last Battle"

    ]
]

let [book1, book2, book3, [book4, ,book6,book7] ] = books
console.log(book1)
console.log(book2)
console.log(book3)
console.log(book4)
console.log(book6)
console.log(book7)
