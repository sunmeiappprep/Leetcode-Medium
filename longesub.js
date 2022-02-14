var lengthOfLongestSubstring = function(s) {
    let temp = ""
    let max = ""
    let counter = 0
    let previousIdx = -1
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (temp.includes(char)){
            let indexOfDup = temp.indexOf(char)
            // console.log(indexOfDup)
            temp = temp.slice(indexOfDup+1)
            temp += char
            previousIdx += 1
        }
        else if (previousIdx+1 === i){
            previousIdx = i
            temp += char
        }
        console.log(temp)
        if (temp.length > max.length){
            max = temp
        }
    }
    console.log(max.length)
    return (max.length)
};

lengthOfLongestSubstring("pwwkew")
console.log(3)
// lengthOfLongestSubstring("dvdf")
// console.log(3)