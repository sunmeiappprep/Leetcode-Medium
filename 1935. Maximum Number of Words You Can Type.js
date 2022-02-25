var canBeTypedWords = function(text, brokenLetters) {
    let count = 0 
    let words = text.split(" ")
    let brokenLetterssplit = brokenLetters.split("")
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if(brokenLetterssplit.some(e => word.includes(e))) continue
        else{
            count++
        }
    }
    return count
};
console.log(canBeTypedWords("leet code","lt"));