var findMin = function(nums) {
    let l = 0
    let r = nums.length-1
    if (nums.length === 1) return nums[0]    
    //find min
    //if num 0 < num last  that means num 0 is the last one
    if (nums[l] < nums[r])
        return nums[l]

    //the loop ends when left over takes right
    while (l <= r){
        //this mid is l + r cause it moves the points to different set point
        let mid = l + r
        console.log(mid)
        let leftval = nums[l]
        let leftofmid = nums[mid-1]
        let midval = nums[mid]
        // console.log(midval)
        let righofmid = nums[mid+1]
        // console.log(righofmid)

        
        if(midval > righofmid){
            return righofmid
        }else if (leftofmid > midval){
            return midval
        }

        if(midval > leftval){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
};

console.log(findMin([9,0,1,2,3,4,5,6,7,8]))
// console.log(findMin([5,6,7,8,9,0,1]))
// console.log(findMin([1,2,3,4,5,6,7,8,9,0]))


// console.log(findMin([5,6,7,8,0,1,2,4]))