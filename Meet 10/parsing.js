


//JS / .parseInt()

//parseInt(....)----- global function
//Number.parseInte(...) - static method



/*



+--------------------+
|                    |
|                    |
| ......             |
|  parseInt(....)  <------------- shortcut ref --------parseInt
| .......            |                                      ^
|        ^           |                                  global function
+--------|-----------+
         |
         |
   static method
*/


//  to parse: STRING -----> VALUES / STRUCTURE


//parseInt (value, radix) --------> 100
//            ^      ^
//            |      |
//          "100"    2,8,10,16 < ----- format
//                       ^
//                      daily

// BAza 16  >Baza 10
// #123  > 10  >  3 + 16*2 + 16*16*1
// 123  > 10  3+ 10*2 + 10*10*1

// Cite sisteme de formate a numerelor exista? 
// Cum scrii acelasi numar in baza 2.8.10.16?