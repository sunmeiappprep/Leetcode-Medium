//mapping last seen char to a hash, hash[char] = i
//we make a pointer of reference begin and if it pass this point 
//so if there is a dup , it will find the index of last seen and +1
//indexLastSeen is always going to +1 cause its the next one in line
//index - indexLastSeen + 1 will give distance away from lastseen
//indexLastSeen has to be at least 0
var lengthOfLongestSubstring = function(s) {
    let hash = {}
    let lowest = null

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hash[char]){
            hash[char] = hash[char]+1
        }
    }

    for (const key in hash) {
        if (hash[key]) {
            const num = hash[key];
            if (lowest === null || lowest > num)
                lowest = num
        }
    }
   return (s.length-lowest)


    // let max = 0
    // let hash = {}
    // let indexLastSeen = 0
    // for (let i = 0; i < s.length; i++) {
    //     let char = [s[i]]
    //     if (hash[char] !== null && hash[char] >= indexLastSeen){
    //         //reset last seen to this
    //         indexLastSeen = hash[char]+1
    //     }
    //     hash[char] = i
    //     console.log(i,indexLastSeen,1)
    //     max = Math.max(max,i - indexLastSeen + 1)
    // }
    // return (max)
};

lengthOfLongestSubstring("pwwkew")
// console.log(3)
lengthOfLongestSubstring("dvdf")
// console.log(3)
lengthOfLongestSubstring("tmmzuxt")
// console.log(5)

// var lengthOfLongestSubstring = function(s) {
//     let temp = ""
//     let max = ""
//     let counter = 0
//     let previousIdx = -1
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (temp.includes(char)){
//             let indexOfDup = temp.indexOf(char)
//             // console.log(indexOfDup)
//             temp = temp.slice(indexOfDup+1)
//             temp += char
//             previousIdx += 1
//         }
//         else if (previousIdx+1 === i){
//             previousIdx = i
//             temp += char
//         }
//         console.log(temp)
//         if (temp.length > max.length){
//             max = temp
//         }
//     }
//     console.log(max.length)
//     return (max.length)
// };

// lengthOfLongestSubstring("pwwkew")
// console.log(3)
// lengthOfLongestSubstring("dvdf")
// console.log(3)