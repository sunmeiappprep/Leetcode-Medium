var buddyStrings = function(s, goal) {
    let hash1 = {}
    let hash2 = {}
    let count = 0

    let hash11 = {}
    let hash22 = {}

    if(s.length === 2 && s === goal && s[0] !== s[1]) return false

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        (hash11[char]) ? hash11[char]+=1 : hash11[char] =1
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        (hash22[char]) ? hash22[char]+=1 : hash22[char] =1
    }

    for (const key in hash22) {
        if (hash22[key] !== hash11[key]) {
            return false  
        }
    }
    // for (const key in goal) {
    //     if (goal[key] !== s[key]) {
    //         return false
    //     }
    // }

    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];
    //     if (hash1[char]){
    //         hash1[char].push(i)
    //     }else{
    //         hash1[char] = []
    //         hash1[char].push(i)
    //     } 
    // }

    // for (let i = 0; i < goal.length; i++) {
    //     const char = goal[i];
    //     if (hash2[char]){
    //         hash2[char].push(i)
    //     }else{
    //         hash2[char] = []
    //         hash2[char].push(i)
    //     } 
    // }

    // for (const key in hash1) {
    //     if (hash2[key] !== hash1[key]) {
    //         count++
    //         // console.log(s[key],goal[key] )
    //     }
    // }
    // // console.log(count)

    // if (count > 2) return false
    // return true
    // return true
};

// console.log(buddyStrings('ab','ba'))
console.log(buddyStrings("abcd","badc"))
console.log(buddyStrings('ab','ab'))
// console.log(buddyStrings('aa','aa'))