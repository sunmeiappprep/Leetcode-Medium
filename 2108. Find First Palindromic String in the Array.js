var firstPalindrome = function(words) {
    // let answer = word
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let reversed = word.split("").reverse().join("")
        if (word === reversed) return word
    }
    return ""
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))

