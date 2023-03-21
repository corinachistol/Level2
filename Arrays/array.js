

function sumInput() {
    
    let numbers = [];
    
    while(true){

        let value = prompt('Insert a number')
        if(value === '' || value == null || !isFinite(value)) break;

        numbers.push(+value)
    }

    let sum = 0

    for (let number of numbers ) {
        sum +=number
    }

    return sum

}

// alert(sumInput());


arr=[1, -2, 3, 4, -9, 6]

function getMaxSubSum(arr) {
    let maxSum = 0
    let partialSum =0

    for(let item of arr) { //for each item of array
        partialSum +=item  //add it to partialSum
        maxSum = Math.max(maxSum, partialSum) //remember the maximum

        if (partialSum < 0) partialSum=0 //zero if negative
    }
    return maxSum
}

alert ( getMaxSubSum( [-1, 2, 3, -9] ) );  // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0



styles = ['jaz', 'blues']

styles.push('rock-n-roll')

styles[Math.floor((styles.length-1)/2)]= 'classics';

alert(styles.shift())
styles.unshift('rap','reggae')


let arr =['a', 'b']
arr.push(function(){
    alert(this);
})

arr[2]();