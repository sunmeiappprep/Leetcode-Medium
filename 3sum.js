var threeSum = function(nums) {
    let answer = []
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i]
        let left = i+1;
        let right = nums.length-1
        while (right > left) {
            const sum = nums[right] + nums[left]
            if (sum > target){
                right--
            }
            else if (sum < target){
                left ++
            }
            else{
                answer.push([nums[i],nums[left],nums[right]]);
                while(nums[left] === nums[left+1]) left++;
                while(nums[right] === nums[right-1]) right--;
                left++
                right--
            }
        }
    }
    console.log(answer)
    return answer
}
threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])

console.log([-1,0,1,2,-1,-4,-2,-3,3,0,4].sort())
console.log([-1,0,1,2,-1,-4,-2,-3,3,0,4].sort((a,b) => a - b))
