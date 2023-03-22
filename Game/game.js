//ASAP As Simple as Possible

//TWO Implementation
//1. String of characters
//2.Arrays of numbers

// Topics
// -Data Types
// -Conditionals & Operators
// -Functional programming
// -Sequential / Hierarchical
// -Timers
//-Dom event basics


//string
let map = 
`
##########
#.p......#
#........#
#........#
#........#
#........#
#........#
#........#
#........#
##########
`

function renderMap(map) {
    gameMapContainer.innerHTML = map
};

let idx = map.indexOf('p')

function moveRight (map) {
    let newMap = map.substring(0, idx) + "." + "p" + map.substring(idx+2)
    return newMap
}

function moveLeft(map) {
   // let idx = map.indexOf('p')
    let newMap = map.substring(0, (idx-1)) + "p" + "." + map.substring(idx+1)
    return newMap
}

// HW3: create the moveLeft() function
renderMap(map)