//when its matches 2 , minus 

var characterReplacement = function(s, k) {
    let hash = {}
    let l = 0
    let r = 0
    let max = 0
    while (r < s.length) {
        //current irate
        const char = s[r];
        // adding current count to hash
        hash[char] = hash[char] ? hash[char] + 1 : 1;
        // if hash count is greater than max , set max to hash count
        if (hash[char] > max) max = hash[char] 
        // so you are minusing the max and filtering out r - l difference 
        // tldr r - l is the difference and max is the buffer
        if (r - l - max >= k){
            console.log(r,l,max,r - l - max,k)
            hash[s[l]]--
            l++
        }
        r++
    }
    console.log(r-l)
    return r-l
};

// characterReplacement("AABABBA",1)
characterReplacement("AAAAAAAA",1)
