var flatten = (array) => {
    let test = Array.isArray(array);  // true
    let arr = []
    if (test){
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (Array.isArray(element)){
                // console.log(element)
                arr.push(...flatten(element))
            }
            else{
                arr.push(element)
            }
        }
    }
    return arr

}

console.log(flatten([1,2,3,[1,3,23],[23,333,322]]))