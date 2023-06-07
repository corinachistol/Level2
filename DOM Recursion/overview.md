## DOM Traversal  / DFS = Depth-first search  / BFS = Breadth-first search

# DFS = 
    traverse through left subtrees first, then traverse through the right subtrees.
     Traversezi cladirea per etaj- apartament
        * mai putin efort consuma

# BFS =  
    traverse through one level of children nodes, then traverse through the level of grandchildren nodes (and so on...) .
    Traversezi cladirea per etaj-scara (scara1-et1 , scara2- etaj1,etc...),
    
    Caracteristici:
        * consuma mai mult efort ,
        * e nevoide de mai mult timp si memorie



## Why?
 * DOM lifecycle
 * event propagation
 * rendering mecanics
 * data processing
 * trees & graphs
 * CSS selectors
 * recursion = principiu de apel a functiei
 * It's used 







 ## simple iteration vs simple recursion
  * iteratia nu are memorie, fiind la pasul 2 nu tine minte ce a fost la pasul 1
  * recursion transmite o cerere/actiune de la un participant la altul si este
        in asteptarea raspunsului inapoi. 
        Se aloca mai multa memorie. un rsp este asteptat, dar el tre sa se plimbe pe la mai multi participanti


## recursion aspects

    * occurs when a function calls herself

    '''js

//////////////// infinite loops
        while va crea o singura variabila in memorie ,doar ca o va crea de fiecare data si o va distruge
        Iteratia simpla se potriveste pentru structuri simple, flat structures, ex:array

    while(1) {
        let n = 1 
    }
    
/////////infinite recursion-
        o functie care se apleaza pe ea insasi,infinit pina  ce browserul o stopeaza
        Recursia se potriveste perfect pentru ca la fiecare apel a functiei, isi creaza memoria locala, pina in momentul cind nu se incheie si se intoarce inapoi

    f() {  
       let n =1;     acesta variabila se va crea separat intr-o celula separata in contextul fiecarui apel de functie, 
        f() {
        //....
        }
    }

    f();

    '''''

    * the stack of the caller stays open untill all callees are not done yet!

    | call 0: f() ------------------------------------>
                    |call 1: ------------------------->
                            .....
                            .....
                    "return 1: <-----------------------
    |return 0: <---------------------------------------



## biggest challenges of recursion in our context
 *passing data
 *getting the result
 *stopping at the right moment