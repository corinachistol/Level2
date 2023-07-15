import U, { printName as printUserName, printAge } from './user.js' 
//relative path in relation with the current working folder
// . ( single dot) denotes the current directory in the path.
// .. (two dots) denotes the parent directory, i.e., one level above.

//Absolute path for this example would be:  /week9/modules/user.js

const user = new U('Bob', 11)
console.log(user)

printUserName(user)
printAge(user)
