var productExceptSelf = function(nums) {
    let obj = {}
    let arr = Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        obj[i]= nums.slice(0+1,i)+nums.slice(i,nums.length)
    }
    console.log(obj)
    return obj
};
productExceptSelf([1,2,3,4])