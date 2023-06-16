let a = 10
let b = 100
let c 

console.log("before",a,b)
// c = a
// a = b
// b = c 
[a,b] = [b,a]
console.log("after",a,b)