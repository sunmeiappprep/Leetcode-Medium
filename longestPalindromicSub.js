//make a helper function that expands from given LEFT and RIGHT points
//the function will keep expanding if s[l] and s[r] are the same
//function will also compare the max vs temp
//make a loop that that illrate thru the index , 
//first call for expand mid is for odd nums
//second call is for even nums


var longestPalindrome = function(s) {

    let temp = ""
    let max = ""

    const expandfrommid = (left, right) => {
        while((left >= 0 && right < s.length) && s[left] === s[right]){
            temp = s.slice(left,right+1)
            if (temp.length > max.length) max = temp
            right++
            left--
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandfrommid(i-1,i+1)
        expandfrommid(i,i+1)
    }
    return max
};

console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("abb"));
console.log(longestPalindrome("dabab"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("bb"));
 