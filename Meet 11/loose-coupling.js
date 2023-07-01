

// ## JS/ Loose coupling / inversion of control (IoC) - dependenta usoara intre componente
// - callback()
// adapter pattern
// S[O]LID principles (5)

//  open for extension ,closed for modification

//  Collection lib
// x-------x--------------------------------x----> time
//        2020                             2023
//          \       1000+ projects          / |
//                    dependent on this       |
//                                            ?
//                                          + from scratch
//                                             extends + override
//                                             mail to the author

//     [data] -----> Collection



//Library Collection
//Author A. US 2020(int, float,....)
class Collection{
    constructor(data = []){
        this.data = data
    }

    add(value){
        this.data.push(value)
    }
    //imutability
    //returns filtered data packed in a new collection
    filter(cb) {   //STRONG COUPLED 
        let tempColl = new Collection()
        for(let index = 0; index < this.data.length; index++){
            //LOOSE COUPLED ALGORITHM
            /// VVV
            if( cb(this.data[index] == true) ){
                tempColl.add(this.data[index])

            }
        }
        return tempColl
    }

    get length () {
        return this.data.length
    }
}


//HW1: rewrite the tests
//Test case 1

let bYears = new Collection([1999,1990,1980,2001,2020])
bYears.add(2019)

if(bYears.length == 6){
    console.log("Test 1 PASSED!")
}else{
    console.error("Test 1 FAILED!")
}

//Test Case 2
// let fYears  = bYears.filterMinMAx( 1999,2010 )
// if(fYears.length == 2) {
//     console.log("Test 2 PASSED!")
// }else{
//     console.error("Test 2 FAILED!")
// }

//Test Case 2 - Version 2
let fYears  = bYears.filter( (v) => {
    return (v >= 1999 && v <= 2010)
} )








////////////////////////////////////
//Main Code
//Author B. MD, 2023

let payments = new Collection([
    { amount:100, currency: "EUR", date:"2023-01-01" },
    { amount:200, currency: "USD", date:"2023-01-02" },
    { amount:300, currency: "RON", date:"2023-01-03" },
])


payments.add( { amount:400, currency: "EUR", date:"2023-01-04", })

// IOC
//   HW2: rewrite this arrow with less code
//      how can we pass min,max --> bind apply call                   
let mPayments = payments.filter( v => v.amount >= 200 && v.amount <= 300 )