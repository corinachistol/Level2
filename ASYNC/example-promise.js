//input output functions   AM imbracat promisiunea intro functie , ca sa pot accesa de mai multe ori acest obiect al promisiunii care va returna acesta promisiune
//Promise
const  pGetNumber = (size = 10) => { 
    return new Promise( (resolve,reject)=>{
        let numbers = []

        setTimeout( ()=>{
            while( numbers.length < size ){
                numbers.push( Math.ceil( -5 + Math.random() * 10 ) )
            }
            resolve(numbers )
        }, Math.random() * 1000 )

    } )
}

//process functions

const pMaxNumber = (numbers) =>{ 
    return new Promise ((resolve,reject) => {
        let maxNumber = numbers[0]
        setTimeout( ()=> {
            for( let i=0; i<numbers.length; i++ ){
                if( numbers[i] > maxNumber ){
                    maxNumber = numbers[i]
                }
            }
            resolve(maxNumber)
        },Math.random() * 1000 )
    })

}

//render
const renderNumber = (number) =>{
    return new Promise(  (resolve,reject)=>{

        let result =''
        setTimeout( ()=>{
            result = `{number:${number}}`
            resolve(result)
        },Math.random() * 1000 )

    } )
}


////////////////
//pe lung
// let p_numbers= pGetNumber(5)

// let p_max_number = p_numbers.then( (numbers)=>{
//     return pMaxNumber(numbers)
// } )

// p_max_number.then( (result)=>{
//     console.log(result)
// } )


//versiunea scurtata
//dclarative coding
function execute () {

    pGetNumber(5)
        .then( (numbers)=>{
            return pMaxNumber(numbers)
        })
        .then( (max_number)=> {
            return renderNumber(max_number)
        })
        .then ( (result)=>{
            console.log(result)
        }) 
          
}





//fara promise
//input output function
// const getNumbers = (cb, size = 10 ) => {
//     let numbers = []
    
//     setTimeout( ()=>{
//         while( numbers.length < size ){
//             //HW2: setInterval(), sa repete operatiunea acesta, cite un push peste citeva secunde random. si doar cind s-a ajuns la size.length sa se considere ca operatiunea sa incheiat
//             numbers.push( Math.ceil( -5 + Math.random() * 10 ) )
//         }
//         cb(numbers )
//     }, Math.random() * 1000 )

// }



//process
// const maxNumber = (cb,numbers) => {
//     //HW1: think another way to get the max value
//     let maxNumber = numbers[0]
//     setTimeout( ()=> {
//         for( let i=0; i<numbers.length; i++ ){
//             if( numbers[i] > maxNumber ){
//                 maxNumber = numbers[i]
//             }
//         }
//         cb(maxNumber)
//     },Math.random() * 1000 )
  
// }



//render
// const renderNumber = (cb, number) => {
//     let result =''
//     setTimeout( ()=>{
//         result = `{number:${number}}`
//         cb(result)
//     },Math.random() * 1000 )
// }









