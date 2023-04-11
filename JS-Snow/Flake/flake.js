
// OOP:Classes -->Object / constructor = o metoda speciala ce ajuta la initierea obiectelor

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


class Flake { //PascalCase, camelCase
    
    constructor( n, top, left, bgcolor, scale ) {
        this.n = n
        this.top = top
        this.left = left
        this.bgcolor = bgcolor
        this.scale = scale
        //HW1: make it work:
         //             left, size(transform:scale() ), color (bg-color )
    }
    //properties:( show us the structure) top, left, size, speed (x,y,), color....
     
    // methods: (show us the behavior), fall(), move(), fade()

    render(root) {
        root.innerHTML = `<div class="flake" 
                            style="
                                top:${this.top}px;
                                left:${this.left}px;
                                background-color:${this.bgcolor};
                                transform:${this.scale};
                            "
                        >${this.n}</div>`
    }
 }