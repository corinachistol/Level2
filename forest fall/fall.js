
const randomPercent = () => { return parseInt(Math.random() * 100)}
const randomTurns = () => { return Math.random() * 5}
const randomTime = () => { return parseInt(Math.random() * 50)}
const randomDuration = () => { return parseInt(Math.random() * 100)}
const randomLeaf = () => { return parseInt(Math.random() * 4 + 1)}

const addLeaf = (number) => {
    let parent = document.querySelector(`.layer-${number}`)
    let leftPercentS = randomPercent()
    let leftPercentE = randomPercent()
    let turnX = randomTurns()
    let turnY = randomTurns()
    let turnZ = randomTurns()
    let delay = randomTime()
    let duration = randomDuration()
    let scale = 0.3 / number
    let randomTopE = randomPercent()

    parent.innerHTML += `
        <div class="leaf leaf-${randomLeaf()} fall" 
            style="
                --fall-start-s: ${scale};
                --fall-end-s: ${scale+ 0.2} ;
                --fall-start-top: -10%; 
                --fall-end-top:${90 + randomTopE}%;
                --fall-start-left: ${leftPercentS}%; 
                --fall-end-left: ${leftPercentE}%; 
                --fall-end-rx: ${turnX}turn;
                --fall-end-ry: ${turnY}turn;
                --fall-end-rz: ${turnZ}turn;
                --fall-delay: ${delay}s;
                --fall-duration: ${duration}s;
                "></div>
    `


    //add random duration, rotation pe y and z, 
}

const addLeaves = ()  =>{
    for (let i=0; i<100; i++){
        let number = parseInt(Math.random() * 2+1)
        addLeaf(number)
    }
}

addLeaves();




//HW2: similar add multiple rays, loops,functions random
const randomRay = () => parseInt(Math.random() * 2+1);
const randomAngle = () => Math.random() * -.65;

const addRay = (number) =>{

    let startAngle = randomAngle();
    let endAngle = randomAngle() - .05;

    let parent = document.querySelector(`.layer-1`)
    parent.innerHTML += `
        <div class="ray ray-${randomRay()} shine"
            style="
                --shine-start-angle:${startAngle}turn;
                --shine-end-angle:${endAngle}turn;
            "
        "></div>
    `
}

const addRays = () =>{
    for (let i=0; i<3;i++){
        let number = parseInt(Math.random() * 3+1)
        addRay(number)
    }
}

addRays()