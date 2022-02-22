// sort it
// irate
// if not in hash do something

function getMaximumDistinctCount(a, b, k) {
    let hashA = {}
    hashA.dupes = []
    let hashB = {}
    let counter = 0
    // let a = a.sort((a,b) => a - b)
    // let b = b.sort((a,b) => a - b)

    
    for (let index = 0; index < a.length; index++) {
        const char = a[index];
        if (hashA.hasOwnProperty(char)){
            hashA.dupes.push(index) 
        }
        else{
            console.log(index)
            hashA[char] = index
        }
    } 

    for (let index = 0; index < b.length; index++) {
        const element = b[index];
        if(!hashA[element] && k >= 0){
            a[hashA.dupes[counter]] = element
            hashA[element] = true
            counter++
        }
    }

    console.log(hashA);
    console.log(hashB);
    console.log(a);
    uniq = [...new Set(a)];
    return(uniq.length)
}

getMaximumDistinctCount([2,3,3,2,2],[1,3,2,4,1],2)