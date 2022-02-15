var longestPalindrome = function(s) {
    let hash = {}
    for (let x = 0; x < s.length; x++) {
        const char = s[x];
        if (hash[char]){
            hash[char].push(x)
        }
        else{
            hash[char] = []
            hash[char].push(x)
        }
    }
    for (const key in hash) {
        if (hash[key].length > 1) {
            const element = hash[key];
            for (let i = 0; i < element.length; i++) {
                let l = 0
                let r = 1
                let stringForward = s.slice(element[l],element[r+1])
                // let backward = stringForward.so
                console.log(stringForward);
            }

            
        }
    }
    console.log(hash);
};

// console.log(longestPalindrome("racecar"));
// console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("abb"));
// console.log(longestPalindrome("dabab"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome("bb"));
 