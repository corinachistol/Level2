// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
// Using the fetch API

// json file: https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json

const fetchPromise = fetch("bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log(fetchPromise)

//callback hell
// fetchPromise.then( (response) =>{
//     console.log(`Received response: ${response.status}`)
//     const jsonPromise = response.json();
//     jsonPromise.then( (data) =>{
//         console.log(data[0].name)
//     } )
// } )

console.log("Starting request....")

fetchPromise
    .then( (response) => {
        if(!response.ok) {
            throw new Error (`HTTP error: ${response.status}`)
        }    
        return response.json();
    } )
    .then( (data) =>{
        console.log(data[0].name)
    } )
    .catch( (error) => {
        console.error(`Could not get products: ${error}`)
    } )


const fetchPromise1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found")
const fetchPromise3 = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")

Promise.all( [fetchPromise1, fetchPromise2, fetchPromise3] )
    .then( (responses)=> {
        for(const response of responses){
            console.log(`${response.url}:${response.status}`)
        }
    } )
    .catch( (error)=>{
        console.error(`Failed to fetch: ${error}`)
    } )


// Promise.any( [fetchPromise1, fetchPromise2, fetchPromise3] )
// .then( (response)=> {
    
//     console.log(`${response.url}:${response.status}`)
    
// } )
// .catch( (error)=>{
//     console.error(`Failed to fetch: ${error}`)
// } )