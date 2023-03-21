
//Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
    .split('-') //splits my-long-word into array
    .map(
        //capitalize first letters of all array items except the first one
        (word,index) => index == 0 ? word:word[0].toUpperCase() + word.slice(1)
    )
    .join('')
    
};

camelize('background-color');

//filter range
// let arr=[5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)

// alert(filtered)
// alert(arr)

// function filterRange (arr,a, b){
//     return arr.filter(item => (a<=item && item <=b) )

// }


//Filter range inplace
// function filterRangeInPlace(arr, a, b){
    
//     for (let i=0; i<arr.length; i++){
//         let val = arr[i]
        
//         if(val <a || val>b){
//             arr.splice(i,1)
//             i--
//         }
//     }
    
// }
// let arr =[5, 3, 8, 1]
// filterRangeInPlace(arr,1,4)

// alert(arr)

//Sort in decreasing order
arr.sort((a,b) => b-a)

let arr = [5, 2, 1, -10, 8]
alert(arr)