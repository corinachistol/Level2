
const loadDataFromAPI = (cb) => {

    let xhr = new XMLHttpRequest()

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=2844780d5018a7a283fb30479f4e5ca4&units=metric`)

    xhr.send()

    xhr.onload = () =>{
        let data = JSON.parse(xhr.responseText)

        cb(data)
    }
}

//manages data
const load = () =>{
    //1.check the cache
    let data = null
    if(checkDataCache("data")){
        //2.tajke from cache
        data = loadDataFromCache("data")
        cb(data)
    }else{
        // 3. request to API
        loadDataFromAPI( (data) =>{
            saveDataToCache("data", data)
            cb(data)
        } )
    }
}

const render = (data) => {
    console.log(data)

}

const saveDataToCache = ( key, data ) => {
    localStorage.setItem(key, JSON.stringify(data) )
}

const loadDataFromCache = (key) => {
    return JSON.parse( localStorage.setItem(key) )
}

const checkDataCache = (key) => {
    return localStorage.getItem(key )
}

load(render)