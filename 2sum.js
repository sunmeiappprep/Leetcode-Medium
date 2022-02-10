// map illerates and keys: and index as the value
// if target - illerate = one of the keys , then return the key index and illerate index


var twoSum = function(nums, target) {
    let obj = {}
    for (let x = 0; x < nums.length; x++) {
        if(obj.hasOwnProperty(target-nums[x])){
            return [obj[target-nums[x]],x]
        }
        obj[nums[x]] = x
    }
}

twoSum([2,3,4], 6)
