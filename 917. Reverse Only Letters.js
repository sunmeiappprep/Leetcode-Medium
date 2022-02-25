var reverseOnlyLetters = function(s) {
    let abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let arr = []
    let temp = ""
    let test = []
    // console.log(arr.length)
    // console.log(arr.length)

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!abc.includes(char)){
            test.push(i)
        }
    }

    for (let i = s.length-1; i >= 0; i--) {
        const char = s[i];
        if (test.includes(s.length-i-1)){
            arr[i] = char
        }
        else{
            arr[i] = char
        }
    }




    console.log(arr.join(""))
    return arr.join("")
};

// reverseOnlyLetters('ab-cd')
reverseOnlyLetters("jIhg-fEd-Cb-a")//"j-Ih-gfE-dCba"
