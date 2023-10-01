///me developers
const f =(argument: number) => {
    let result = argument + 0.5
    return result
}

/////tester
let testValues =  [
    {in: 1, out: 1.5},
    {in: -1, out: -0.5},
    {in: "1",  out: NaN},
]

testValues.forEach( (test,index)=> {
    let result = f(test.in)
    console.log(`test ${index+1}: ${test.in} -> ${result} ` + (result === test.out ? 'passed ': ' failed'))
})