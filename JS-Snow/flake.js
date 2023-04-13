
// OOP:Classes -->Object / constructor = o metoda speciala ce ajuta la initierea obiectelor  --part1

// class Person{
//     ...
//     constructor(name){

//     }
//     ...
// }

//let p = new Person ("John")   ----->  atunci cind foloseste operatorul "new" si pomenesti o clasa, neajungind la parametri, are loc urmatorul lant in memorie:(constructor method inca nu se apeleaza)
/*
            |
            \------>un mecanism ascuns va crea un  
                    Object () primitiv 
                        \
                         \----->init basics (acestui obiect i se ataseaza niste chestii de baza fara de care nu poate exista un obiect in JS)
                                    \
                                     \ ----> + label "Person" ----> (this) constuctor()  
                                                (este etichetat si invocat constructorul cu parametrul respectiv.Acest mecanism va astepta sa-si desfasoare logica scrisa mai sus in clasa)
                                                                                v
                                                                                v    <<< custom code
                                                                                v
                                                                <------------ object 
                                                                (tot acel mecanism ascuns va prelua obiectul de la constuctorul cu modificarile aduse de acesta si-l va returna inapoi)
*/

//const randomScale = () => { return Math.random() * 1};

//FLAKE COMPONENT
class Flake{ //PascalCase, camelCase

    //APPEAR
    constructor( n, left, top, speed, size ) {
        this.n    = n
        this.left = left
        this.top  = top
        this.speed  = speed
        this.size  = size
        console.info(`FLAKE ${this.n}:APPEARED`)
        //this.bgcolor = bgcolor
        //this.scale   = scale
    }

    //falling phase
    fall ( cw, ch, cb ) {
        this.timerId = setInterval(() => {
            this.top += this.speed
            console.log(`FLAKE ${this.n}:FALL`,this)

            //uppdate the rendered div
            this.update()

            // //SEARCH THE DIV OF THE CURRENT FLAKE
            // window[`flake__${this.n}`].style.top = `${this.top}px` 
            //am conectat flake-ul pe care l-am creat noi cu cel pe care il randeaza browserul.
            //Nu e cea mai buna solutie pentru ca am facut STRONG COUPLING anume fall(). In schimb, mai sus invocam this.update() pe care o declaram mai jos si punem acolo logica de update.

            if(this.top >= ch){
                this.disappear(cb)
            }
        },20)
    }

    //DISAPPEAR
    disappear(cb) {
        clearInterval(this.timerId)
        console.log(`FLAKE ${this.n}:DISAPPEARED`,this)
        window[`flake__${this.n}`].style.display =`none`  
        cb()
    }

    update() {               //Here is better
        //SEARCH THE DIV OF THE CURRENT FLAKE
        window[`flake__${this.n}`].style.top = `${this.top}px` 
    }

    //PRESENTATION
    render(root) {
        root.innerHTML += `<div id="flake__${this.n}" class="flake" 
                            style="
                                left:${this.left}px;
                                top:${this.top}px;
                                transform:scale(${this.size});
                            "
                        >${this.n}</div>`
    }

}

// background-color:${this.bgcolor};
// 
       //HW1: make it work:
         //             left, size(transform:scale() ), color (bg-color )

        //properties:( show us the structure) top, left, size, speed (x,y,), color....
            
        // methods: (show us the behavior), fall(), move(), fade()
   








 /*
    ! COMPONENT LIFECYCLE
    ! PROTOTYPING
    ! DETACHED (headless) APPROACH
 */


    /*
    Obiectul de tip Flake noi l-am creat si este in memorie (app.js prin variabilaf1). OBJ{} DOM a fost creat de browser cind am plasat <div> in render(root) in baza codului HTML
    Flake{}                    obj{} DOM
    [INNER LOGIC ---------->PRESENTATION LOGIC]*/

    /*
    LIFECYCLE
        *APPEAR
        |
        |
        falling phase
        |
        |
        * DISAPPEAR
 
    */


        