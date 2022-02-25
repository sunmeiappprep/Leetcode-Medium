var firstUniqChar = function(str) {
    let hash = {}
    let min = -1
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (hash[char]){
            hash[char].push(i)
        }
        else{
            hash[char] = []
            hash[char].push(i)
        }
    }
    // console.log(hash)

    for (const key in hash) {
        if (hash[key].length === 1) {
            min = hash[key]
            break
        }
    }
    console.log(min)
    return min
};

firstUniqChar('leetcode')
firstUniqChar('loveleetcode')
