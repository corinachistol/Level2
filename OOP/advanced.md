 ## OOP from new to profi
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
function FButton () { }  
 
2. newES6
class CButton { }

//Cream o variabila fb1 care sa contine obiectul de tip FButton.Prototipul aflat in spatele acestei functii serveste la crearea  sablonului acestui obiect fb1
fb1 = new FButton()

cb1 = new Cbutton()     acest obiect = fb1

//Adaugam o functie nou in prototipul obiectului FButton
FButton.prototype.click = () => {
    console.log("Button clicked")
}

fb1.click() => Button clickedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee