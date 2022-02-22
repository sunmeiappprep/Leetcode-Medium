function deleteProducts(arr, k) {
    // Write your code here \
    let hash = {}
    let count = 0
    let current = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        (hash[element]) ? hash[element]+=1 : hash[element]=1
    }

    let testing = Object.values(hash).sort((a,b) => a-b)

    // console.log(testing)
    // while (m >= 0){
    //     let index = 0

    //     return holder
    // }


    for (let index = 0 ; index < testing.length; index++) {
        const element = testing[index];
        // console.log(element)
        k -= element
        // console.log(k);

        if (k < 0){
            count ++
            // console.log(testing.length-a)
            // return testing.length-a
        }
    }
    
    // console.log(hash);
    return count
}

// console.log(deleteProducts([1,2,3,1,2,2,1],3))
// console.log(deleteProducts([2, 2, 1, 3, 3, 3],3))
console.log(deleteProducts([4,3,1,1,3,3,2],3))

// console.log(deleteProducts([2, 2, 1, 3, 3, 3],3))
// console.log(deleteProducts([2, 4, 1, 5, 3, 5, 1, 3],2))



