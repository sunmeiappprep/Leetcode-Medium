var countSubstrings = function(s) {
    let l = 0
    let r = 1
    let counter = 0
    let arr = []

    while(r <= s.length){
        
        let subString = (s.slice(l,r))
        let reversesub = subString.split("").reverse().join("")
        if (subString === reversesub){
            arr.push(subString)
            counter +=1
        }
        else{
            l = r
        }
        // console.log(reversesub)
        r++
        
    }
    console.log(arr)
    console.log(counter)
};

// console.log(countSubstrings("abc"))
console.log(countSubstrings("aaa"))