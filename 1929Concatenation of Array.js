var getConcatenation = function(nums) {
    
    let arr = Array(nums.length*2)

    for (let i = 0; i < nums.length; i++) {
        const char = nums[i];
        arr[i] = nums[i]
        arr[i+nums.length] = nums[i]
    }


};

console.log(getConcatenation([1,2,1]))
console.log(getConcatenation([[1,3,2,1]]))