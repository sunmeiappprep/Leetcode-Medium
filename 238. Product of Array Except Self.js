var productExceptSelf = function(nums) {
    let arr = []
    let left = 1
    let right = 1

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        arr[i] = left
        left = left*element
    }

    for (let i = nums.length-1; i >= 0 ; i--) {
        const element = nums[i];
        arr[i] = right*arr[i]
        right *= element

    }
    console.log(arr)
    return arr
};
console.log(productExceptSelf([1,2,3,4]))
// console.log(productExceptSelf([-1,1,0,-3,3]))


    // let arr = []
    // let left = 1
    // let right = 1

    // for (let i = nums.length-1; i >= 0; i--) {
    //     arr[i] = right
    //     right *= nums[i]
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     arr[i] *= left
    //     left *= nums[i]
    // }
    // console.log(arr);