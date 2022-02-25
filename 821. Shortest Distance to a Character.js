var shortestToChar = function(s, c) {
    let foundedIdx = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === c){
            foundedIdx.push(i)
        }
        
    }
    let arr = []
    let min = null
    for (let i = 0; i < s.length; i++) {
        const char = i;
        for (let z = 0; z < foundedIdx.length; z++) {
            let foundIdx = foundedIdx[z];
            let diff = Math.abs(char - foundIdx)
            if (min === null || diff < min) min = diff
        }
        arr.push(min)
        min = null
    }

    console.log(arr)
    return arr
};

console.log(shortestToChar("loveleetcode","e"))