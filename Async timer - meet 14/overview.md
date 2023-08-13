## async timer 



callback ---< promise ---> async / await

Set Interval (f,5000)   ---->chat, chestii care arata in timp real schimbarea coeficientilor, trade,finante, schibm valutar

-interactiune cu user, dupa ce am primis rsp, mai  repeta aceesi actiune

x for, while/do, while
x setInterval
+ setTimeout


+----------app------------+              +------------API-----------+
|                          |             |                          |
|                          |             |                          |
|                          | ---fetch--> |                          |
|                          |             |                          |
|                          |<----------  |                          |
|                          |             |                          |
|                          |             |                          |
|                          |             |                          |
+--------------------------+             +--------------------------+


STRONG COUPLING

+---------getDefinition(word)--------+
|                                     |
|                                     |
|          printData(json) ----------------->  +-----printData(json)----+       
|                                     |         |                       |
+-------------------------------------+         |                       |
                                                +-----------------------+


LOOSE COUPLING

+-------getDefinition(word, callback)-+
|                         ^           |
|                         |           |
|          callback(json) +           |         +-----printData(json)---+       
|                                     |         |                       |
+-------------------------------------+         |                       |
                                                +-----------------------+
                                                    ^
                                app                 |
                        getDefinition(word, callback)