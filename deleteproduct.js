//self solve
//goal is to remove k amount from arr to find min unqiue items
//convert arr into hash with count
//sort that
//irate the sort and k-element, if k turns negative start adding it to counter
//math thing


function deleteProducts(arr, k) {
    let hash = {}
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        (hash[element]) ? hash[element]+=1 : hash[element]=1
    }

    let testing = Object.values(hash).sort((a,b) => a-b)

    for (let index = 0 ; index < testing.length; index++) {
        const element = testing[index];
        k -= element
        if (k < 0){
            count ++
        }
    }
    
    return count
}

// console.log(deleteProducts([1,2,3,1,2,2,1],3))
// console.log(deleteProducts([2, 2, 1, 3, 3, 3],3))
console.log(deleteProducts([4,3,1,1,3,3,2],3))

// console.log(deleteProducts([2, 2, 1, 3, 3, 3],3))
// console.log(deleteProducts([2, 4, 1, 5, 3, 5, 1, 3],2))



