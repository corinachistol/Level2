/*
 https://github.com/dorinesinenco/EDUQATION/blob/master/web/js/dom/shooter-simple/README.ro.md
    Operarea cu Evenimentele in DOM
Aveti la baza aceasta mapa cu fisierul HTML si JS, realizati urmatoarele:
Downladati si rulati pagina HTML, veti vedea o tzinta de tir
Prin intermediul JS, gasiti elementul div#target si atasati functia shoot() pentru evenimentul "click" in acest element. Va captura acesta si clicurile din elementele mostenitoare?
Capturati obiectul evenimentului "click" si extrageti coordonatele mouse-ului in acel moment fata de parinte. Nu uitati ca aceste coordonate se masoare de la coltul din stanga-sus al div#target
Declarati o variabila globala score egala cu zero - initial
In momentul in care are loc click-ul, aflati distanta in pixeli de la centru elementului #target (centru se afla in 100px, 100px) pana la locul unde a avut loc click-ul. Pentru a calcula distanta, folositi formula geometrica a distantei in plan intre doua puncte (x1,y1 - x2,y2)
Dupa ce ati calculat distanta de la "centru" tzintei, cu ajutorul unei constructii conditionale (if-else-if) stabiliti punctajul (score) acumulat pe baza:
daca e la peste 100+ pixeli de centru - 0 puncte
daca e intre 75 .. 100 - 5 puncte
daca e intre 50 .. 75 - 10 puncte
daca e intre 25 .. 50 - 20 puncte
daca e intre 0 .. 25 - 40 puncte
Afisati scorul acumulat in pagina!


*/

const target  = document.getElementById('target')
const score = 0

function shoot(e){
    let centertX = target.offsetHeight / 2
    let centerY = target.offsetWidth / 2
    console.log(centertX)
    console.log(centerY)


    console.log('Mouse pozition X',e.offsetX)
    console.log('Mouse position Y',e.offsetY)
   
}


target.addEventListener('click', shoot)