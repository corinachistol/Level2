// const body = document.body

// const div = document.createElement('div')

// const strong = document.createElement("strong")
// strong.innerText = "Hello wolrd 3"
// div.append(strong)
// //div.innerHTML = "<strong>Hello world2!<strong>"


// body.append(div)

// const div = document.querySelector("div")
// console.log(div.textContent)  //afiseaza textul + toate spatiile libere 
// console.log(div.innerText)   //afiseaza doar continutul textului



const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanH1)

console.log(spanHi.id )
console.log(spanHi.title )

console.log(spanHi.setAttribute("title", "dsdsds"))

spanHi.id = 564

spanHi.removeAttribute("id")

console.log(spanHi.dataset.test)
console.log(spanHi.dataset.longerName)

spanHi.dataset.newName = "hi"

spanHi.classList.remove("hi1")