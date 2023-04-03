// 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

let str = "list-style-image"

const camelize = (str) =>{
    return str
    .split("-")
    .map((word,index)=> index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
    .join(" ")
}

console.log(camelize(str));


//2 . Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

let arr = [5, 3, 8, 1]

const filterRange =(arr,a,b) =>{
    return arr.filter( item => (a <= item && item <= b) )
}
let filtered= filterRange(arr,1,4)

console.log(filtered)
console.log(arr)


// 3. Sort in decreasing order

let array=[5, 2, 1, -10, 8]

array.sort( (a,b)=>b-a )

console.log(array)


// 4.Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr1 = ["HTML", "JavaScript", "CSS"];

const copySorter=(arr1) => {
    return arr1.slice().sort()
}
let sorted = copySorter(arr1)

console.log(sorted)
console.log(arr1)

// 6.Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let users =[
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
]

let names = users.map( user=>user.name )
console.log(names)


// 7.Map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let users1 = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
]


let users1Mapped = users1.map(user => ({fullname: `${user.name} ${user.surname}`, id: user.id} ))

console.log(users1Mapped)


// 8.Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// let names1=[
//     { name: "John", age: 25 },
//     { name: "Pete", age: 30 },
//     { name: "Mary", age: 28 }
// ]

const sortByAge =(names1) => names1.sort((a,b) => a.age - b.age)

//console.log(sortByAge(names1))


// 9.Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

const filterRangeInPlace = (array1, a, b) => {
    for(let i=0; i<array1.length; i++){
        let val = array1[i]
        
        if (val < a && val > b ){
            array1.splice(i, 1);
            i--
        }
        
    }
    
    
}
let array1 = [5,3,8,1]
filterRangeInPlace(array1, 1, 4)
console.log(array1)


// 10.Get average age. 
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

let names1=[
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
]

const getAverageAge = (names1) => {
    return names1.reduce( (total,current)=> total + current.age,0) / names1.length  
}

console.log(getAverageAge(names1))




