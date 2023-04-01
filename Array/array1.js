let nums = [1, 2, 3, 4, [5,6, [7,8]],9]


//FLAT - uneste mai multe array-uri care au fost interpolate 
let flat = nums.flat() //nivelul array-lui, daca nu mentionam [7,8] nu va fi unit 


console.log(flat)


//FOREACH - merge prin fiecare element al array-lui si de fiecare data, aplica functia asupra elementului respectiv
let count = 0
names.forEach( n=> console.log(n) )

//forEach = for loop    face exact acelasi lucru ca si for loop
for(let i =0; i< names.length;i++){
    console.log(names[i])
}



let nums1=[1,2,3,4,5,6]

let doubled = nums1.map( n=> n*2 )
console.log(doubled)



let posts = [
    {title:"Post1", author:"Dan"},
    {title:"Post2", author:"Sarah"},
    {title:"Post3", author:"Dan"}
];

let danPosts = posts.filter( p => p.author === "Dan" )
console.log(danPosts)


//reduce() -- reduce the array values to a single number
let number = [1,10,  2, 3, 4, 5, 6]

let total = number.reduce( (total, currentVal)=> total + currentVal / number.length )    //can contain a starting point after length
console.log(total)

let max = number.reduce( (a,b) => Math.max(a,b), -Infinity )
console.log(max)



//some() -check if an array value(1or more) pass some test, return  true at the first true value/false

let isGreaterThan5 = number.some( n => n > 5)
console.log(isGreaterThan5)



//every-   looks through our array and if every single number meets our condition it returns true
let allGreaterThan0 = number.every( n => n > 0 ) 
console.log(allGreaterThan0)


let stock=[
   { item:"ketchup", quantity:32 },
   { item:"mayo", quantity:9 },
   { item:"hot sauce", quantity:12 }
];

//find() -find a certain value in array

let mayo = stock.findIndex( s => s.item === "mayo" )
console.log(mayo)


//sort()
let names4 = ["Danny", "Sarah", "Joe", "Molly", "Joe"]
let alph = names4.sort() 

console.log(alph)


