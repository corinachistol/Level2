 ## OOP from new to profi   OOP_par1 19/03
 * Type
 * Object
 * Prototype
 * Class
 * Inheritance
 * Encapsulation
 * Getters/setters
 * this keyword



 Values:  number, string ,boolean= true/false sunt caracterizate prin tip.Valorile folosite in JS pot fi caracterizate prin:
 - structure
 - behaviour
 - relations
 - meta data



this is primitive 
    v
 _______   
 |"abc" |<-----alocates memory
 | Obj. |
 |string|  --->how + works ?
 |______|
    ^
    ^
    ^ identifier <text>
    ^
    ^
    identifier <another_text>




this is primitive 
    v
 _______   
 |"abc" |<-----alocates memory
 | Obj. |
 |string| ---->.toUpperCase()
 |______|
                    v
                    v
                    v
                __________
                || "ABC"||
                ||      ||<<<< <result>
                _________
 



 Obiecte = valori obiecte structurate care sunt caract prin anumita  structura,comportament , au un anumit tip care il caracterizeaza, si au relatii cu diferite alte entitati 

Obiecte de tip primitiv   vs 
 let s = "abc"           vs let s = new String ("abc")
 let n = 100             vs let n = new Number(100)
 let b = true           
 let a = [1,2,3]         let a = new Array
 let o ={a:1}

 let f=()=>{}

obiect explicit
----------------
|  value        |
|  -------      |  <--Prototype---Object  Prototype dicteaza schita cum a fost creat acest obiect
| | x:100 |     |
| | y:200 |     |
| ---------     |
|               |
|               |
----------------
   ^
   |
   ref
   |
   point(var)






obiect explicit
----------------------------------
|  value primitive                |
|  -------------------------      |  <--Prototype---Array []  Prototype disteaza schita cum a fost creat acest obiect
| | 0:"http://youtube.com"  |     |                        |
| | 1:"http://facebook.com" |     |                        |                        
| --------------------------      |                         .push(...)
|   length = 2                    |                         .length =0  by default,cind creezi un array au lungimea 0
----------------------------------                         |    
   ^                                                       |    
   |                                                       |
  ref                                                      |
   |                                                       |
   links(var)                                              |
                                                           |    
                                                           |                                                        
                                                           |
                                                           |   
obiect explicit                                            |
----------------------------------                         |
|  value primitive                |                        |
|  -------------------------      |  <--Prototype----------
| | 0:"http://p0rnhub.com"  |     |                                       
| --------------------------      |                         
|   length = 1 -tine minte lungimea array-ului propriu ,personalizat               |
----------------------------------
   ^
   |
   ref
   |
   disabled_links(var)

 ## OOP_part2

            Type (class): Array, Object, String, CustomSomething.... sunt niste obiecte care contin prototipul obiectelor care vor iesi din aceste obiecte. MEtodele care sunt menite obiectului sunt numite STATICE
                    |   -methods (functii)
                    |   -properties (caracteristici si valori)   |Type.method() --- incercam sa accesam metoda direct din containerul tipului.
                    |
                    | .prototype      |Type.prototype.method()  -- Noi apelam metoda care e facuta pentru obiectele de acest tip. Metodele care stau aici sunt DINAMICE.

                                Ceea ce punem noi in prototip ,automat devine parte din obiectul creat. Metodele si proprietatile care le punem noi in prototip sunt diferite de metodele tipului creat(String,Array, Object). In containerul tipului(Type/Class) creat se mai contin metode care nu se vor transmite obiectului.Ele se vad in consola, apartin tipului si functioneaza direct din tip - (Prototype- sunt metode by default ale tipului creat)

                    |    -methods 
                    |    -properties 
                    v            |
                                 |
   obj ------>Prototype          /
            __proto__           |
   <----------------------------

   Exemplu: Comparam cutiuta unui Type cu garajul (= Type) unde este parcat un automobil (= obiectul). In acest garaj pot fi parcate diferite masini pe rind.
                                                      |                                          |
                                                      |                                          |
                              Metodele si propr. din garaj sunt  instrumente           Metodele si propr. obiectului (Prototype) sunt individuale si tin strict de 
                               universale/comune, pentru                                     obiectul respectiv. Ex:cheia de start a masinii
                              mai multe tipuri de masini
                                      


   ----FButton(Type)--------
   |                       |
   |                       |
   |  --prototype--        |
   |                       |
   |                       |
   |                       |
   |                       |
   |                       |
   ------------------------
            ^
            |
            f b1



In JS ,sunt 2 modalitati de a declara un tip/ o clasa.
1. old school
function FButton () {
   this.click = () => {
      console.lo("Button clicked")
   }
 }  
 
2. newES6
class CButton () { 
   click() {
      cconsole.log("Button clicked")
   }
}

//Cream o variabila fb1 care sa contina obiectul de tip FButton.Prototipul aflat in spatele acestei functii serveste la crearea  sablonului acestui obiect fb1
fb1 = new FButton()


cb1 = new Cbutton()     acest obiect = fb1


//Adaugam o functie nou in prototipul obiectului FButton

FButton.prototype.click = () => {
    console.log("Button clicked")
}

fb1.click() => Button clicked

## OOP _part3

## Prototypal Inheritance / Propertu Shadowing (overiding - classic term)

* each chain node has a "bag of it's own properties
*SHADOWING means when a "closer " property "hides" a property farther on the chain
* this - point to the first node on the inheritance chain (to the closest)

!!! only the READ property action automatically propagates along the chain
!!! actions like CREATE, WRITE, DELETE property applies by default only to the specified object, it DOES NOT propagate automatically

action ----->

inheritance-----------> prototype-----> prototype------------> .... -----------------> Object------------>null
      |                    |                 |                                            |
   [ own ]              [ own ]           [ own ]                                      [ own ]


[ own ]-----------> proto ---------> Object ( .... ) -------> null 
                                                  .toString()
{
   prop:1
}


[ own ]-----------> proto ---------> Array () ------->Object (.....) ---------> null 
                                          .toString()             .toString()

{

}

[ own props ]  ----> extends/inherits ---------> Object (....)

let smartphone = {
    model: "Samsung"
}
         ^
         |
         .__Proto__
         |
let smartphone_with_charger = {   
    fast:true
}

smartphone_with_charger.__proto__ = smartphone   fast is own property, inherited property is model due to proto




Object:
   1. prototype  --> for any object      
   2. container of tools dedicated to object manipulation


## Syntactic Sugar
let o = {}     -pe scurt
let o = Object.create(Object.prototype, {})   pe lung

In esenta, se intimpla acelasi lucru.


let a = [1,2,3]     vs   let a = Object.create(Array.prototype, {})



let smartphone_with_charger = {
    fast:true
}

Object.setPrototypeOf(smartphone_with_charger, smartphone)   --->{fast: true}  == seteaza prototipul "smartphone" pentru obiectul "smartphone_with_charger"


## Syntactic sugar
1. use Class as prototype

class Smartphone {
   constructor() {
      this.model = "Samsung"
   }
}

2. to instantiate objects use NEW
let sp = new Smartphone()

sp---->proto-->Smarphone---->Objects

3. use extends to inherit
class SmartphoneWithCharger extends Smartphone {
   constructor(){
      super()
      this.fast = true

   }
}

let smwc = new SmartphoneWithCharger()


## Encapsulation / get /set  --putem proteja valorile din interior dupa o careva logica
class Human {
    constructor(age){
        this._age = age
    }

    set age (value) {
        if(value >=0){
            this._age = value
        }
    }

    get age () {
        return this._age
    }
}


## JS dynamic , objects can be frozen/ sealead

Freeze() - ingheata un obiect, nu poate fi modificat,el practic se transforma intr-o constanta
Object.freeze()

Seal() --incuie doar structura si definitia, dar valorile acestuia pot fi schimbate.
Object.seal()