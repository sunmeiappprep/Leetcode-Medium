// map illerates and keys: and index as the value
// if target - illerate = one of the keys , then return the key index and illerate index

// hash[x] = to 0 or falsy value , the hash[x] wont be true , use hasownprop
var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        // console.log(target-element)
        if (hash.hasOwnProperty([target - element])){
            return [hash[target - element],i]
        }
        hash[element] = i 
    }
    // console.log(hash);
}
console.log(twoSum([2,3,4], 6));














































var twoSum = function(nums, target) {
    let obj = {}
    for (let x = 0; x < nums.length; x++) {
        if(obj.hasOwnProperty(target-nums[x])){
            return [obj[target-nums[x]],x]
        }
        obj[nums[x]] = x
    }
}