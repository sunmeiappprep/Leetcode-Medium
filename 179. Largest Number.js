var largestNumber = function(nums) {
    let numbercount = {}
    let counter = 9
    let string = ""
    nums.sort((a, b) => {
        console.log(`${b}${a}`,`${a}${b}`);
        return `${b}${a}` - `${a}${b}`
    });


    return nums

};

console.log(largestNumber([3,30,34,5,9]))