
//Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
    .split('-') //splits my-long-word into array  //["border","left","width"]
    .map(
        //capitalize first letters of all array items except the first one
        (word,index) => index == 0 ? word:word[0].toUpperCase() + word.slice(1)
    )
    .join('')
    
};

camelize('background-color');

//filter range
// let arr=[5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)

// alert(filtered)
// alert(arr)

// function filterRange (arr,a, b){
//     return arr.filter(item => (a<=item && item <=b) )

// }


//Filter range inplace
// function filterRangeInPlace(arr, a, b){
    
//     for (let i=0; i<arr.length; i++){
//         let val = arr[i]
        
//         if(val <a || val>b){
//             arr.splice(i,1)
//             i--
//         }
//     }
    
// }
// let arr =[5, 3, 8, 1]
// filterRangeInPlace(arr,1,4)

// alert(arr)




//Sort in decreasing order
// let arr = [5, 2, 1, -10, 8]
// arr.sort((a,b) => b-a)  // de ce b-a?

// alert(arr)



//Copy and Sort array    //   Asta l-am facut singura, dar solutia mea -fara functii difera de JS.com
//let arr = ["HTML", "JavaScript", "CSS"];


console.log(arr.sort( (a, b) => a > b ? 1:-1 ))
console.log(arr.sort((a, b) => a.localeCompare(b) ) )

function copySorted (arr){
  return arr.slice().sort()
}
copySorted(arr);

console.log(copySorted(arr))
alert (arr)


//Create an extendable calculator  
let calc = new Calculator

function Calculator () {

}

calc.reduce(callback, initial)

alert (calc.calculate("3+7") )
  // nu stiu sa-l rezolv


 //Map to names
//  let john = { name: "John", age:25 }
//  let pete = { name: "Pete", age:30 }
//  let mary = { name: "Mary", age:28 }

//  let users =[john, pete, mary] ;
//  let names = users.map(user => user.name)

//  console.log(names)


//Map to objects

// let john = { name: "John", surname: "Smith", id:1 }
// let pete = { name: "Pete", surname: "Hunt", id:2 }
// let mary = { name: "Mary", surname: "Key", id:3 }

// let users = [john, pete, mary]

// let usersMapped = users.map(user => ({fullName:`${user.name} ${user.surname}`, id:user.id }))
//   //  fullName :this.name + this.surname, id: user.id) eu am scris asa

// console.log(usersMapped[0].id)
// console.log(usersMapped[0].fullName)


//Sort users by age

// function sortByAge(arr){
//   arr.sort((a,b) => a.age -b.age)
// }

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ pete, john, mary ];


// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

//Shuffle an array
// let arr =[1, 2, 3]

// function shuffle (arr){
//   arr.sort(() =>Math.random () -.5)
// }

// shuffle(arr)
// console.log(arr)



//Get the average age
function getAverageAge (users){
  return users.reduce((total, currentVal)=>total + currentVal.age, 0 / users.length)
}

console.log(getAverageAge(users))
