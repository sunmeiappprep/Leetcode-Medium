//loop the givens and map them to hash
//loop thru one hash and key if second hash is the same


var isAnagram = function(s, t) {
    let hash1 = {}
    let hash2 = {}
    
    for (let x = 0; x < s.length; x++) {
        const element = s[x];
        if(!hash1[element])hash1[element] = 1;
        else{
            hash1[element] += 1
        }
    }

    for (let x = 0; x < t.length; x++) {
        const element = t[x];
        if(!hash2[element])hash2[element] = 1;
        else{
            hash2[element] += 1
        }
    }

    for (const key in hash1) {
        if (hash2[key] !== hash1[key]) {
            return false
            
        }
    }
    
    return true
};

console.log(isAnagram("anagram","nagaram"))