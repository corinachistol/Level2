// cookie  = a small text file stored on your computer
//           used to remember information about the user
//           saved in name=value pair

// console.log(navigator.cookieEnabled)
// document.cookie = "firstName=Patrick; expires=Sun,1 January 2030 12:00:00 UTC; path=/"
// document.cookie = "lastName=Star; expires=Sun,1 January 2030 12:00:00 UTC; path=/"

// console.log(document.cookie)

const firstText = document.querySelector('#firstText')
const lastText = document.querySelector('#lastText')
const submitBtn = document.querySelector('#submitBtn')
const cookieBtn = document.querySelector('#cookieBtn')

submitBtn.addEventListener( 'click', ()=>{
    setCookie("firstName", firstText.value, 365)
    setCookie("lastName", lastText.value, 365)
} )

cookieBtn.addEventListener( 'click', ()=>{
    firstText.value = getCookie("firstName")
    lastText.value = getCookie("lastName")
} )


function setCookie(name, value, daysToLive){
    //cream un obiect de tip Date()
    const date = new Date()

    //transforma date in miliseconds      24h/zi 60min/h 60s/m  1000s/ms
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)  // 1720977384678

    // transforma  date din miliseconds in string
    let expires = "expires=" + date.toUTCString()  // 'Sat, 15 Jul 2023 17:13:45 GMT'
    document.cookie = `${name}=${value};${expires}; path =/`
}

function deleteCookie(name){
    setCookie(name,null,null)
}


function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    console.log(cArray)
    let result = null


    cArray.forEach( element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
        //console.log(element.substring())
    } )

    return result
}

console.log(getCookie("firstName") )
console.log(getCookie("lastName") )


// setCookie("firstName", "SpongeBob", 365)
// setCookie("lastName", "Star", 365)


// deleteCookie("email")
// deleteCookie("firstName")
// deleteCookie("lastName")

console.log(document.cookie)

