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
async function execute () {
    
    let numbers = await pGetNumber(5)
    let max_number = await pMaxNumber(numbers)
    let result = await renderNumber(max_number)
    console.log(result)
          
}
