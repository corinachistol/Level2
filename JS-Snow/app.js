//SETTINGS
const containerW = window.innerWidth
const containerH = window.innerHeight

let count = 1 

//initial wave of flakes

setInterval(() =>{
    if(count<50) {
        addAnotherFlake()
        console.log("INIT:", count)
    }
},10 )
    // timere in ciclu creaza o bresa de securitate

// debugger

//n:1--->2sec
// n:2--->0sec delay

function addAnotherFlake() {
    count++
    let scale = randFloat(1.7)
    let f = new Flake(count, randCoord(0, containerW), 0, scale, scale)
    f.render(scene)
    f.fall(containerW, containerH, addAnotherFlake)

}



