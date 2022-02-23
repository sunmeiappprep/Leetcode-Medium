var canBeIncreasing = function(nums) {
    if (nums.length <= 2) return true


    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const nextone = nums[i+1];
        const previous = nums[i-1];

        if (current > nextone){
           if(previous >= nextone){
               nums.splice(i+1,1)
               break
           }else if (previous < nextone || (previous === undefined && current > nextone)){
                nums.splice(i,1)
                break
           }
        }
    }

    if (nums.length === 1) return true

    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const nextone = nums[i+1];
        if (current >= nextone){
            return false
        }
    }
    return true
};
console.log(canBeIncreasing([1,2,10,5,7]))
console.log(canBeIncreasing([100,900,32,950]))
console.log(canBeIncreasing([2,1]))
console.log(canBeIncreasing([2,3,1,2]))
console.log(canBeIncreasing([100,20,100]))


