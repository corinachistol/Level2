
//video 501_b
//ASYNC CODE EXECUTION - cod care se executa paralel cu alte fragmente de code sau cod care depinde de evenimente,timers,etc. executia carora nu se  stie cind va fi finisata
 
// 1. Callbacks
// 2. Promises
// 3. async/await


// AD ROTATOR

// "CAllback"  , "Promises", "async/await"

//prin callback
const showAd = () => {
    console.clear()
    console.log("Callbacks")
    setTimeout( () => {
        console.clear()
        console.log("Promises")
        setTimeout( () => {
            console.clear()
            console.log("async/await")
            setTimeout( () => {
                console.clear()
            },2000 )
        },2000 )
    },2000 )
    
}

//HW1:* try to do this with a single setInterval + array
const ad = ["Callback", "Promise", "async/await" ] 
let count = 0

let timer = setInterval( function(){
    console.log(ad[count])
    count++
    console.clear()
    if(count === ad.length){
        clearInterval(timer)
    }
    
},2000 )

ad.forEach( element =>{
    setInterval( function(){
        console.log(element)
    },2000 )
    console.clear()
} )  // acesta metoda le afiseaza simultan

// let timer = setInterval( ()=> {
//     console.log(ad)
   
// },2000 )   // in consola pe linga array-ul respectiv, aparea si undefined, pentru ca fiecare callback vine cu un this la pachet 



//Promise
let promiseShowAdd1 = new Promise( (resolve, reject) => {
    console.clear()
    console.log("Callbacks")
    setTimeout( ()=> {
        console.clear()
        resolve()
    },2000 )
} )


promiseShowAdd1.then( () => {
    console.log("Promsises")
    return new Promise ( (resolve,reject)=>{
        setTimeout( ()=> {
            console.clear()
            resolve()
        },2000 )
    } )
} ).then( ()=>{
    console.log("async/await")
} )



/*

        timer <--------cb1
                        timer <-------- cb2
                                         timer <------cb3

    temp = promise
            .then(....)
            .then(....)
            .then(....)
    
    

*/





//callback in callback in callback e bad approach, e greu sa urmaresti in timp ce se intimpla
//Promisiunile au fost aduse in JS pentru a simplifica asa gen de situatii



/*


promises can be executed in sequence or parallel

---------------------------Promise-------------------------------                     next Promise
|                                                               |
|               decides                                         |
|             ------------------               _fres(){}        |                 |
|             v         -------------------    _frej(){}        |                 |
|             v        v                                        |       .then()   |    
|          (resolve,reject) => {                                |--------------->
|                                                               |
|                     custom logic                              |
|         }                                                     |
|                                                               |
|                                                               |
-----------------------------------------------------------------







*/