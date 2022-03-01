function getGroupedAnagrams(words) {
    let sortedWordIndex = {}
    for (let i = 0; i < words.length; i++) {
        const wordSorted = words[i].split("").sort().join("")
        if(sortedWordIndex[wordSorted]){
            sortedWordIndex[wordSorted].push(i)
        }
        else{
            sortedWordIndex[wordSorted]=[]
            sortedWordIndex[wordSorted].push(i)
        }
    }
    return (Object.keys(sortedWordIndex).length);
}

console.log(getGroupedAnagrams(['cat','listen','slient','fat','gay']));