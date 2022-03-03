var beautySum = function(s) {
    let hash = {}
    let arr = []
    let counter = 0

    for (let i = 0; i < s.length; i++) {
        const startIdx = s[i];
        for (let j = i+2; j < s.length; j++) {
            const endIdx = s[j];
            // console.log(i,j)
            let sliced = s.slice(i,j+1)
            if (sliced.length >= 5){
            arr.push(sliced)

            }
        }
    }
    // console.log(arr)


    console.log(arr)
    // arr = arr.pop()
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if (hash['a'] && hash['e'] && hash['i'] && hash['o'] && hash['u']){
                counter ++
                break
            }
            else{
                hash[char] = true
                if (hash['a'] && hash['e'] && hash['i'] && hash['o'] && hash['u']){
                    counter ++
                    break
                }
            }
            console.log(hash);

        }
        // let values = Object.values(hash)
        // counter += (Math.max(...values)-Math.min(...values))
        
        hash = {}
    }
    return counter
};

console.log(beautySum("aeiouu"));