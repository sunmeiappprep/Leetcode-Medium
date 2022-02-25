var reverseString = function(s) {
    var rec = function(left, right){
        if(left < right){
            tmp = s[left]
            console.log(tmp)
            s[left] = s[right]
            s[right] = tmp
            rec(left + 1, right - 1)
        }
    }
    
    rec(0, s.length-1)   
    
};

console.log(reverseString("h","e","l","l","o"))