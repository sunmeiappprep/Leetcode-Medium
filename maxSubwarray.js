//irate and replace the nums array with nums[x] = Math.max(nums[x],nums[x]+nums[x-1]);
//If we do max or min we can use max or min to save code

var maxSubArray = function(nums) {
    let max = nums[0]
    for (let x = 1; x < nums.length; x++) {
       nums[x] = Math.max(nums[x],nums[x]+nums[x-1]);
       max = Math.max(nums[x],max)
    }
    return max
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])