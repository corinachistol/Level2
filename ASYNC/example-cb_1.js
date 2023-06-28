//video 501_a
//input output functions
const getNumbers = (cb, size = 10 ) => {
    let numbers = []
    
    // setTimeout( ()=>{
    //     while( numbers.length < size ){
    //         //HW2: setInterval(), sa repete operatiunea acesta, cite un push peste citeva secunde random. si doar cind s-a ajuns la size.length sa se considere ca operatiunea sa incheiat
    //         numbers.push( Math.ceil( -5 + Math.random() * 10 ) )
    //     }
    //     cb(numbers )
    // }, Math.random() * 3000 )

    let timer = setInterval( function(){
        numbers.push( Math.ceil( -5 + Math.random() * 10 ) )
        console.log(numbers)
        if(numbers.length === size){
            cb(numbers)
            clearInterval(timer)
        }

    },Math.random() * 3000 )


}

//process functions
const maxNumber = (cb,numbers) => {
    //HW1: think another way to get the max value
    let maxNumber = numbers[0]
    setTimeout( ()=> {
        for( let i=0; i<numbers.length; i++ ){
            if( numbers[i] > maxNumber ){
                maxNumber = numbers[i]
            }
        }
        cb(maxNumber)
    },Math.random() * 3000 )
  
}

//render
const renderNumber = (number) => {
    console.log(">>>>", number)
}

////////////////
getNumbers( (numbers) => {
    maxNumber(renderNumber,numbers)
}

)


