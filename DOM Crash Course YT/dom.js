// //create a div
// let newDiv = document.createElement('div')

// //Add class
// newDiv.className = "Hello";

// //Add id
// newDiv.id = 'Hello';

// //add attribute
// newDiv.setAttribute('title', 'Hellodiv');

// //Create a textnode
// let newDivText = document.createTextNode('Hello World!')

// //add text to div
// newDiv.appendChild(newDivText)

// let body = document.body
// let script = document.querySelector('script')

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// body.insertBefore(newDiv, script)

//EVENTS

// let button = document.getElementById("#button").addEventListener('click', buttonClick)

// function buttonClick(e) {
//   //console.log("Button Clicked")
//   //console.log(e)
// //   console.log(e.target)
// //   console.log(e.target.id)
// //   console.log(e.target.className)
// //   console.log(e.target.classList)
// //   let output = document.getElementById('output')
// //   output.innerHTML = "<h3>" + e.target.id + "</h3>"

// //   console.log(e.type)

// //console.log(e.clientX);   distance from the browser left/top
// // console.log(e.clientY);

// // console.log(e.offsetX)   distance from the actual element left/top
// // console.log(e.offsetY)

// // console.log(e.altKey)
// // console.log(e.ctrlKey)
// // console.log(e.shiftKey)

// }

let button = document.getElementById('#button')
let box = document.getElementById('#box')

//button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// // box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// // box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

//box.addEventListener('mousemove', runEvent)

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

let select = document.querySelector('select')
select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)

form.addEventListener('submit',runEvent)

function runEvent(e) {
    e.preventDefault()
    console.log('Event Type: '+ e.type)
    // output.innerHTML = " <h3>MouseX: " + e.offsetX+ "</h3><h3>MouseY: " +e.offsetY+ "</h3>"

    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"
    console.log(e.target.value)
    // document.getElementById('output').innerHTML = "<h3>" + e.target.value+"</h3>"
}