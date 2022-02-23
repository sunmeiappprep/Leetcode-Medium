var findSpecialInteger = function(arr) {
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        (hash[element]) ? hash[element]+=1 : hash[element] = 1
        let value = hash[element]
        console.log(value,arr.length,value/arr.length);
        if(value/arr.length > .25){
            return element
        }
    }
};

// console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));
console.log(findSpecialInteger([1,2,3,3]));
