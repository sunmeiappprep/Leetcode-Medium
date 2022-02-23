var maxAscendingSum = function(nums) {
    let l = 0
    let r = 1
    let count = nums[l]
    let max = nums[l]
    while (r < nums.length){
        console.log(nums[l],nums[r]);
        if (nums[l] < nums[r]){
            l++
            count += nums[r]
        max = Math.max(max,count)

        }
        else{
            l = r
            count = nums[l]
        }
        r++
    }
    return max
};

console.log(maxAscendingSum([10,20,30,5,10,50]))
console.log(maxAscendingSum([12,17,15,13,10,11,12]))
console.log(maxAscendingSum([100,10,1]))

