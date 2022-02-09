var threeSum = function(nums) {
    let match = function(array1,array2){
        let counter = 0
        for (let x = 0; x < array1.length; x++) {
            if (array2.includes(array1[x])){
                counter += 1
            }
        }
        return counter === 3
    }

    console.log(match([ -1, 0, 1 ], [ -1, 1, 0 ] ))

    let left = 0
    let mid = 1
    let truemid = 1
    let arr = []
    while(left < nums.length-2){
        if (nums[left] == 0 && nums[mid] == 0 && nums[mid+1] == 0){
            let inArray = arr.some(e => e.toString() == [nums[left],nums[mid],nums[mid+1]].toString())
            if (!inArray){
                arr.push([nums[left],nums[mid],nums[mid+1]])
            }
            mid += 1
        }
        if (nums[left]+nums[mid]+nums[mid+1] === 0 && (nums[left]!=nums[mid] ||nums[mid] != nums[mid+1])){
            arr.push([nums[left],nums[mid],nums[mid+1]])
            mid += 1
        }
        else if (mid > nums.length-2){
            left += 1
            truemid += 1
            mid = truemid
        }
        else{
            mid += 1
        }
    }
    console.log(arr)
    return arr
};
threeSum([-1,0,1,0])

// let arr = [[0,0,0],[1,1,1]]
// console.log(arr.some(e => e.toString() == [0,0,0].toString()))