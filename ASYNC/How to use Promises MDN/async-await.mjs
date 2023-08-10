async function fetchProducts() {
    try {
         // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
         // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error
        const data = await response.json()
        // se poate asa , fara promise de mai jos, daor apelam functia si gata ori cu return si cu promise
        // console.log(data[0].name)
        return data

    }catch (error) {
        console.log(`Could not get products :${error}`)
    }
}
const promise = fetchProducts()
promise.then( (data)=>{console.log(data[0].name)} )