var nextGreaterElement = function(nums1, nums2) {
    let arr = []

    for (let i = 0; i < nums1.length; i++) {
        const number = nums1[i];
        let index = nums2.indexOf(number)
        // console.log(index)
        for (let x = index; x < nums2.length; x++) {
            const num2number = nums2[x];
            if (nums2[index] < num2number){
                arr.push(num2number)
                break
            }
            else if (x === nums2.length-1){
                arr.push(-1)
            }

        }
    }
    return arr
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
console.log(nextGreaterElement([2,4],[1,2,3,4]))
console.log(nextGreaterElement([4,1,2],[1,2,3,4]))
