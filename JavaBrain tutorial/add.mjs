export const add = (a,b) => a+b;

export const substract = (a,b) => a-b;

//console.log(add(1,2))

//Varianta 1
// module.exports = {
//     add: add,
//     substract: substract
// }

//Varianta 2
// module.exports.add = add
// module.exports.substract = substract

//Varianta 3
// exports.add = add
// exports.substract = substract

// exports = add // egalezi variabila export cu cuvintul add si de fapt nu exportam nimic