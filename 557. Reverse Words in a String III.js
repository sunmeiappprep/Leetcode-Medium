var reverseWords = function(s) {
    let splited = s.split(" ")
    let answer = []
    for (let i = 0; i < splited.length; i++) {
        const word = splited[i];
        const reversed = word.split("").reverse().join("")
        answer.push(reversed)
    }
    return answer.join(" ")
};

console.log(reverseWords("Let's take LeetCode contest"));