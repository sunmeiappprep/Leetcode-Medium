var countSubstrings = function(s) {
    let l = 0
    let r = 1
    let arr = []
    // console.log(s.slice(l,r));
    while (r <= s.length){
        let sub = s.slice(l,r)
        let reverse = sub.split("").reverse().join("")
        if (l > r){
            l = r
        }
        console.log(sub)

        // arr.push(s.slice(l,r))
        // if (slice)
        r++
    }
    return arr
};

console.log(countSubstrings("abc"))
console.log(countSubstrings("aaa"))