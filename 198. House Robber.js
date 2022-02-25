var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0],nums[1])

    let maxLoot = [nums[0], Math.max(nums[0],nums[1])]

    for (let i = 2; i < nums.length; i++) {
        maxLoot.push(Math.max(nums[i]+maxLoot[i-2],maxLoot[i-1]))
    }

    return maxLoot.pop()
};

console.log(rob([2,7,9,3,1]))