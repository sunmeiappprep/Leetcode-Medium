var duplicateZeros = function(arr) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 0) {
            arr.splice(i,0,0)
            arr.pop()
            i+=1
        }
    }
    return arr
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));