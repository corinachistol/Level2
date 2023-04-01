let names = ["Danny", "Sarah", "Joe", "Molly", "Joe"]
let names2 = ["John", "Maria"]
let names3 = ["Delia", "Tom"]
let namesCopy =[...names]

// transform the array into string
let stringNames = names.toString()
console.log(stringNames)


//transform the array into string, but we can specify the separator
let join = names.join(" and ")
console.log(join)

//join the second and third array into the first
let concatenation = names.concat(names2, names3)
console.log(concatenation)


//SPLICE = mutates the original array,
namesCopy.splice(1, 1)  //start position, how many elements  deleted
console.log(names)


namesCopy.splice(1,2,"Bill", "Bob")  //start pos, nr of elements deleted, elements added
console.log(namesCopy)

//SLICE - slice out parts of an array- doesn.t mutates the original array
let slice = names.slice(1,3)  //start index, end index not included
console.log(slice)
console.log(names)


//IndexOF  -returns the position of first index in the array
//LastIndexOf - return the last index from an array- searches from right to left
let index = names.indexOf("Joe")  //2
//let index = names.lastIndexOf("Joe")  //4
console.log(index)



