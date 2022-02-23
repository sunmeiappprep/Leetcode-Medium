var buildArray = function(nums) {
    arr = Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[nums[i]]
    }
    return arr
};

console.log(buildArray([0,2,1,5,3,4]))
console.log(buildArray([5,0,1,2,3,4]))
