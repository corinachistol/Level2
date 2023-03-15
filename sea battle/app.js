
// array of objects
//HW1: add the "explosion" property to each layer
// and using if, render the explosion only when the torpedo is in the same layer as the ship

//HW2:using scss + loop / html + js + loop
// make so the radar as 10 divisions
let layers = [
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
    {
        ship: false,
        torpedo: false,
        explosion:false
    },
]

let score = 0


let ship = {
    x: -300 ,
    layer:0,
    dir: 1
}

let explosion = {
    x: 0,
    layer: 0
}
let scope = {
    x:0
}


let torpedo = {
    x: 0,
    layer: 0,
    shot: false
}
let timerShip
let timerTorpedo





//HW1: add explosion to the render

const render = () =>{
    let seaDiv = document.querySelector('.sea');
    seaDiv.innerHTML = ``

    for(let i=0;i<=9;i++){

        let objects 

        if(layers[i].ship) {

            if(ship.dir == 1){
                objects += `
                <div class="ship" style="left: ${ship.x}px">
                <div class="base">
                    <div class="aside"></div>
                </div>
                <div class="middle">
                    <div class="first-level"></div>
                    <div class="gun-1">
                        <div class="gun-tun"></div>
                    </div>
                    <div class="gun-2">
                        <div class="gun-tun"></div>
                    </div>
                    
                    <div class="second-level"></div>
                    <div class="gun-3">
                        <div class="gun-tun"></div>
                    </div>
                    
                </div>
                <div class="top">
                    <div class="first-level"></div>
                    <div class="left-element"></div>
                    <div class="middle-element"></div>
                    <div class="right-element"></div>
                </div>
            </div> 
            `
            } else {
                objects += `
                <div class="ship reverse" style="left: ${ship.x}px">
                <div class="base">
                    <div class="aside"></div>
                </div>
                <div class="middle">
                    <div class="first-level"></div>
                    <div class="gun-1">
                        <div class="gun-tun"></div>
                    </div>
                    <div class="gun-2">
                        <div class="gun-tun"></div>
                    </div>
                    
                    <div class="second-level"></div>
                    <div class="gun-3">
                        <div class="gun-tun"></div>
                    </div>
                    
                </div>
                <div class="top">
                    <div class="first-level"></div>
                    <div class="left-element"></div>
                    <div class="middle-element"></div>
                    <div class="right-element"></div>
                </div>
            </div> 
            `
            }
            
            
        }

       
        

        if(layers[i].torpedo) {
            objects += `
            <div class="torpedo reverse" style="left: ${torpedo.x}px">
                <div class="head center"></div>
                <div class="body center"></div>
                <div class="tail-h center"></div>
                <div class="tail-v center"></div>
                <div class="tail center"></div>
            
            </div> 
            `
        }

        if(layers[i].explosion) {
            objects += `
            <div class="explosion" style="left: ${explosion.x}px">
                <div class="fire-bottom-sm"></div>
                <div class="fire-bottom-md"></div>

            </div> 
            `
        }

        seaDiv.innerHTML += `
        <div class="layer">  <!--layer ${i}-->
            ${objects}
            <div class=" wave wave-bottom"></div>
        </div>`
    }

    seaDiv.innerHTML += `
    <div class="scope" 
        style="left:${scope.x}px">
        <div class="mid">+</div>
        <div class="h">--</div>
        <div class="v">--</div>
    </div> 
    `
}


const moveScope = (e) =>{
    scope.x = e.clientX-100
}

const shoot = (e)=>{
    if(e.code == "Space" && !torpedo.shot){
        torpedo.shot = true
        torpedo.layer = 0
        layers[torpedo.layer].torpedo = true
        torpedo.x = scope.x +  345  
        console.log(e)
        console.log(layers)

        timerTorpedo = setInterval( ()=>{
            if(torpedo.layer == 9)  {
                clearInterval(timerTorpedo)
                torpedo.shot = false
                layers[torpedo.layer].torpedo = false

                score -= 20

                //HW4: each time a torpedo misses
                //decrease the score
            }else {
                layers[torpedo.layer].torpedo = false
                torpedo.layer ++
                layers[torpedo.layer].torpedo = true

                if(
                    torpedo.layer == ship.layer 
                    &&
                    torpedo.x > ship.x -10
                    &&
                    torpedo.x < ship.x +510
                    ){
                        alert("Yeyy")
                        
                        layers.explosion = true
                        explosion.x =  torpedo.x 
                        explosion.layer = ship.layer
                       
                        layers[torpedo.layer].torpedo = false

                        
                        score += 10
                        resetShip()
                        

                
                    //HW2: update the explosion layer
                    //increase score
                    //reset the ship
                    //HW3: create a function that renders the score  in the footer,
                    
                }
            }
            
        }, 500 )

    }
    
}

const renderF = () =>{
    let footer = document.querySelector('.l-footer')
    footer.innerHTML = `Score: ${score}`
}

renderF();


const resetShip = () =>{
    for ( let i=0; i<layers.length; i++){
        layers[i].ship = false
    }

    let ridx = Math.floor(Math.random() * 10)
    ship.layer = ridx
    layers[ridx].ship = true

    let rand = Math.random()

    if (rand >= 0.5){
        ship.x = -300
        ship.dir = 1
    } else{
        ship.x = innerWidth +400
        ship.dir = -1
    }

    clearInterval(timerShip)
    timerShip = setInterval( () => {
        ship.x += ship.dir

        if(ship.dir == 1 && ship.x >innerWidth +400){
            resetShip()
        }
        if(ship.dir == -1 && ship.x < -300){
            resetShip()
        }

        render()
    }, 10 )
}


//timerShip
// setTimeout(f,delay)
//setInterval(f,delay)


resetShip();
render();