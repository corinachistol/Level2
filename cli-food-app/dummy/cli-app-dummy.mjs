//video 00015__8 cli-food-app

import './dummy-int.mjs'
import {x} from './dummy.mjs'


console.log(x)


//O variabil importata din acelasi file-modul, direct ori intermediar, el va fi importat o singura data.
//Daca acelasi modul are alta sursa de incarcare, s-ar putea sa se incarce de 2 ori.
//Node are tendinda de a salva in cache modules

