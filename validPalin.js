//could have converted the s to lower first
//could have use regex  s = s.replace(/[^A-Za-z0-9]/g, '');
//after new string , just need to use two pointer




var isPalindrome = function(s) {
    let string = ""
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(alphabet.includes(element.toUpperCase())){
            string+=element.toUpperCase()
        }
    }
    let l = 0
    let r = string.length-1

    while (l < r) {
        if (string[l]!==string[r]){
            return false
        }
        else{
            l++
            r--
        }
    }
    return true
};
console.log(isPalindrome("0P"));

