/*

    WEATHER APP:  video 503-504
        * DOM manipualtion
        * DOM events
        * APIs
        * JSON
        * HTTP
        * AJAx
        * Immutability
        * Storage
        * Optimization
        * callback
        * higher order functions
        * geolocation

    API = application programming interface
    Key = password care permite unui sistem sa se autentifice intr-un alt sistem
    end points= punct de access, la care sectiune te adresezi pentru a obtine date 
*/

// facem legatura cu obiectele din html (form,input, button)
const formWeather = document.getElementById('form-weather')
const inputWeather = document.querySelector('#form-weather input')
const btnWeather = document.querySelector('#form-weather button')
const output = formWeather.lastElementChild


function submitForm(e){
    e.preventDefault()

    let inpCity = inputWeather.value.trim() 
    console.log(inpCity)

    //cream un obiect de tip Request()
    const xhr = new XMLHttpRequest()
    const key = '2844780d5018a7a283fb30479f4e5ca4'

    // spunem browserului unde sa trimita acest request , prin metoda GET, cu cheia respectiva
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${inpCity}&appid=${key}&units=metric`)

    //trimitem requestul
    xhr.send()

    //cind requestul s-a incarcat, pune raspunsul intro variabila
    xhr.onload = () => {
        let response = xhr.responseText
        console.log(response)

        let data = JSON.parse(response)
        console.log(data)

        let { 
            coord:{lon,lat},
            main:{temp, feels_like, humidity},
            name, 
            weather: [ {icon} ],
            wind :{speed} 
        } = data

        console.log(name, lon, lat, temp, feels_like, humidity,speed)

        render( data )

        // if(xhr.status !== 200){
        //     debugger
        //     alert('Wrong city name!!!')
        // } else{
        //     output.innerHTML = `
        //          The temperature in ${name} is ${temp}C ${icon} , feels like: ${feels_like} with a humidity of ${humidity}% and wind speed ${speed} km/h.
        //     `
        // }
    }

}

const render = ( {data} ) => {
    output.innerHTML = `
        The temperature at ${name} is ${temp}*C , feels like: ${feels_like} with a humidity of ${humidity}% and wind speed ${speed}km/h.
    `
}

btnWeather.addEventListener('click', submitForm)





/*

    CACHE:
        * speed
        * near consumption
        * lower trafic
        * lower resource  consumption
        * 

    ------------------------------------
                                        |
    CONSUMER ----> req -----> [ CACHE ] |---- req -----------------> Provider (baza de date,aplicatii web, api, memorie operativa pentru procesor)
                  resource1       v ^   |
                            resource1   |   cache hit- consumatorul cere ceva si cache gaseste local
                                        |
                                        |   cache miss-  resursa nu a fost gasita in cache, si browserul o trimite mai departe spre server
-----------------------------------------

Cookies e mai greu sa-l accesezi din JS.

Local storage si sesion storage sunt accesibile doar din browser, doar prin JS
Cookies poate fi accesat si de catre server, si de back si de front web.Ele sunt mai vulnerabile . 


data --->json ---->storage



*/