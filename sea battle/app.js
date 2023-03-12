
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
        ship: true,
        torpedo: true,
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





const render = () =>{
    let seaDiv = document.querySelector('.sea');

    for(let i=0;i<=9;i++){

        let objects 

        if(layers[i].ship) {
            objects += `
            <div class="ship">
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

        if(layers[i].torpedo) {
            objects += `
        <div class="torpedo">
            <div class="head center"></div>
            <div class="body center"></div>
            <div class="tail-h center"></div>
            <div class="tail-v center"></div>
            <div class="tail center"></div>
            
        </div> 
            `
        }

        if(layers[i].ship == true & layers[i].torpedo == true) {
            objects += `
        <div class="explosion">
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
}

render();

