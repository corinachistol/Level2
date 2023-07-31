  video 00015__1_ node overview
  
   ## NodeJs
    * a Javascript runtime built on Chrome's V8 Javascrip engine
    * runtime = mediu de rulare a unui cod JS
    * motorul Javascript - V8 a fost scos din browser, inserat in nodeJs si datorita acestui fapt putem rula cod JS direct pe calculator ori server, pe masina
    * JS rulat in browser este utilizat cel mai des in contextul paginii
    * Js rulat in Node seamana cu un limbaj de uz general, pentru a scrie back end pentru site-uri, utilitati de asamblare,procesare automata,permite sa scrii si apps pentru descktop si smartphone





    ### NodeJs Environment

    -VM = virtual maschine ( componenta care ruleaza scriptul ) este centrul atentie
    -global / local modules
    - npm
    - packages
    - dependencies = module sau  pachete  de care depidne logica aplicatiei
    - package - json

--------------node env------------------
|                                      |
|       -------node api--------        |    un set de functionalitati legat de NodeJS, ce functii poti rula
|       |                      |       |
|       |   -------VM------    |       |
|       |   |              |   |       |
|       |   |              |   |       |
|       |   |              |   |       |
|       |   |--------------|   |       |
|       |     global modules   |       |    
|       |                      |       |
|       |     tools npm        |       |    
|       |                      |       |
|       ------------------------       |
|                                      |    
|       -----------app---------        |
|       |                      |       |
|       |   local modules      |       |
|       -----------------------        |
|                                      |
---------------------------------------