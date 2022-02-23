var lastStoneWeight = function(stones) {
    stones.sort((a,b) => a-b)
    while(stones.length !== 1){
        console.log(stones);
        let first = stones.pop()
        let second = stones.pop()
        let diff = first-second
        stones.push(diff)
        stones.sort((a,b) => a-b)
    }
    if (stones === NaN) stones = [0]
    return stones 
};

console.log(lastStoneWeight([2,7,4,1,8,1]))