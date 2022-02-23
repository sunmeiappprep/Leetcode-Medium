var threeConsecutiveOdds = function(arr) {
    let counter  = 0

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 === 1){
            counter++
        }else{
            counter = 0
        }
        if (counter === 3) return true
    }
    return false
};

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));