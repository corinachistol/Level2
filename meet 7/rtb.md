

# JS / runtime binding


                                call f(arg1, arg2,...)---->run
                                /
                               /        * explicit arguments passing 
+---function f(p1, p2,....)-----+       * implicut this binding
|                               |
|                               |
|                  this<------------------- calling context/ object
|                               |
|                               |
|                               |
|                               |
+-------------------------------+


## JS \ function lifecycle

x   !!! declaration
|---------------------
|    function  f(..){   ------> Object / Function
|    ...
|    }
|
|
|
v
x   !!! call 
||   -----------
||       args + this   <------BINDING: implicit(default), explicit    <---------bind() iti permite sa faci o modificare in ceea ce tine de cum se va executa functia, dar neexecutind-o inca.Pasezi un tunning si o lasi. o prepara pentru o eventuala executie.. si pe urma o executi de cite ori vrei,si daca i-ai setat un arg la declarare,pe urma in momentul executiei, poti sa nu mai declari arg
||  
||  
||  
vv
xx      f(...)        <-------INVOKATION: direct , event, timer, callback, ...   
||                      <-------.cal(thisArg, arg....) ,   .apply(thisArg, arrayArg...) = aceste metode fac acelasi lucru ca si .bind(), iti permit sa-i dictezi functiei ce  trebuie interpretat ca this si ce trebuie interpretat ca arg, doar ca o fac o singura data,chiar in momentul apelarii, fara sa creeze o versiune noua a functiei. Afecteaza insasi momentul de apel. De fiecare data ce o executi, influentezi executia ei
||
||
||
||
||
vv
xx   ( execute )     <-------------RUN
||
||
||
||
||
||
vv
xx                   <----------- RETURN