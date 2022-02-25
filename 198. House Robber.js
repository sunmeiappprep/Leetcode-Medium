var rob = function(nums) {
    let total = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (nums[i-2] && nums[i-1]){
         total += Math.max(num+nums[i-2],num+nums[i-1])

        }   
    }
    console.log(total)
};

console.log(rob([1,2,3,1]))