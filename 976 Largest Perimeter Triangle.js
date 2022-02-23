var largestPerimeter = function(nums) {
    if (nums[0] + nums[1] > nums[2]
        && nums[0] + nums[2] > nums[1]
        && nums[1] + nums[2] > nums[0]
        ) {
            return nums[0]+nums[1]+nums[2]
        }
        else{
            return 0
        }
};

console.log(largestPerimeter([2,1,2]));
console.log(largestPerimeter([1,2,1]));