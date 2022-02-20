// first split the element and sort it
// then put the sorted into a hash
// map that sorted to the current idx
// loop over the hash and irate thru the index
// make a temp arr to put all the strs[i] in one group
// push it to main arr and reset temp


var groupAnagrams = function(strs) {
    let temp = []
    let arr = []
    let hash = {}
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i].split("").sort().join("");
        if (hash[word]){
            hash[word].push(i)
        }
        else{
            hash[word] = []
            hash[word].push(i)
        }
    }
    for (const key in hash) {
        let single = hash[key]
        for (let index = 0; index < single.length; index++) {
            const idx = single[index];
            temp.push(strs[idx])
        }
        arr.push(temp)
        temp = []
    }
    console.log(arr)
    return arr
}
groupAnagrams(["eat","tea","tan","ate","nat","bat"])

// hash = {}
// arr = []
// for (let i = 0; i < strs.length; i++) {
//     const element = strs[i].split("");
//     let grouping = (element.sort().join(""))
//     if (hash[grouping]){
        
//     }else{
//         hash[grouping]=[] 
//     }
//     hash[grouping].push([i])
    
// }
// for (const key in hash) {
//         let temp = []
//         const grouping = hash[key];
//         for (let index = 0; index < grouping.length; index++) {
//             const single = grouping[index];
//             temp.push(strs[single])
        
//         }
//         arr.push(temp)
//         temp = []
// }
// return (arr)