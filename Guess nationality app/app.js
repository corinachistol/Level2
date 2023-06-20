
const form = document.querySelector('#form-name')

const input = form.children[2].firstElementChild
const output = form.children[3]

form.addEventListener('submit', (e) => {
    //prevent form submission
    e.preventDefault()
    //alert('The browser tries to submit this form!')

    let name = input.value.trim()

    // HW1: validate & sanitize the input
    //      * dont send empty requests    ---> required
    //      * remove extra spaces         ---> trim()
  
    console.log(name)

    //Ca sa faci un request catre server prin APi, cu ajutorul ajax:
    //facem un request pe server, cream un obiect din clasa XMLHttpRequest
    const xhr = new XMLHttpRequest()
    //ii spunem browserului unde sa trimita acest request, prin metoda GET
    xhr.open("GET", `https://api.nationalize.io/?name=${name}` )
    xhr.send()

    // cind s-a incarcat requestul nostru 100%, pune raspunsul acesteia in variabila response
    xhr.onload = () => {
        let response = xhr.responseText
        let data = JSON.parse(response)
        console.log(response)  // in consola avem string in format JSON
        console.log(data)  // in consola avem obiect
        let nationality = data.country[0].country_id

        //HW2: check when empty response and show a corresponding message
        
        // if(!data){
        //     console.log("We cant process your request!")
        // }

        // if(nationality == 'undefined'){
        //     console.log("We cant process your request!")
        // }

        data.country.some( c => {
            if( !c.country_id ) {
                console.log("We cant process your request!")
            }
        } )
        console.log(nationality)

        output.innerHTML = `You are most probably from <strong>${nationality}</strong>`
    }

    // 1. send request  (name)     --> API
    // 2. wait for response (JSON) <-- API 
    // 3. extract data
    // 4. diplay info
    
}  )




       // blochezi apasarea a oricarei taste
// document.body.addEventListener('keydown', (e)=>{
//     e.preventDefault()
// })

       //blochezi actiunea de a apasa click dreapta
// window.addEventListener('contextmenu', (e)=>{
//     e.preventDefault()
// })



//IMPORTANT NOTES
// 1.Alert este o metoda invechita de a vedea ce face eventul respectiv, 
// pentru asta din setarile consolei -activam preserve log (network) si Preserve log upon navigation (console)
// 2. Event listeners se pot vedea din consola (Elements- Event Listeners)

// 1. user hits ENTER (in contextul input-ului) 'keydone'
// 2. browser listens to this,captures the event (prin aparsarea tastei keydown)
// 3. searches for the form the input is in
// 4. emits a 'submit' event on this form


// URL query parameters

// req ---> GET  https://api.nationalize.io/?name= {putNameHere}
// res <--- JSON string
