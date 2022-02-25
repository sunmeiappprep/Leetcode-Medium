var canJump = function(nums) {
    let Jumpable = Array(nums.length).fill(false)
    Jumpable[0] = true

    for (let i = 1; i < nums.length; i++) {
        if(Jumpable[i-1]){
            let jumps = nums[i-1]
            // let counter = 0
            
            console.log(jumps);
            for (let z = 0; z < jumps; z++) {
                Jumpable[z+i] = true
            }
        }
    }

    return Jumpable
};

console.log(canJump([3,2,1,0,4]));