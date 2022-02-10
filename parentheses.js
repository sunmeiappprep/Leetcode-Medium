//loop thru string , add opens to temp , pop if temp[last] = close, return false if dont, return true if temp === 0

var isValid = function(s) {
    let temp = []
    if (s.length % 2 ==1) return false
    for (let x = 0; x < s.length; x++) {
        const element = s[x];
        if(element == "("){
            temp.push("(")
        }
        else if(element == "{"){
            temp.push("{")
        }
        else if(element == "["){
            temp.push("[")
        }
        else if(element == ")"){
            if(temp[temp.length-1] == "(")
            temp.pop()
            else{
                return false
            }
        }
        else if(element == "}"){
            if(temp[temp.length-1] == "{")
            temp.pop()
            else{
                return false
            }
        }
        else if(element == "]"){
            if(temp[temp.length-1] == "[")
            temp.pop()
            else{
                return false
            }
        }
    }
    console.log(temp.length)
    return temp.length === 0
    
};

isValid("([}}])")