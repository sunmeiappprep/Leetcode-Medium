// two pointer if while r is out not out of bounds , if p[r] > p[l] , check if difference is greater than max , if not u want to move left point to match right point to skip over ills,
// right pointer always increase regardless of conditon

var maxProfit = function(prices) {
    let max = 0
    let left = 0
    let right = 1
    while (right < prices.length){
        if(prices[right]>prices[left]){
            if(prices[right]-prices[left] > max){
                max = prices[right]-prices[left] 
            }   
        }
        else{
            left = right
        }
        right ++
    }
    console.log(max)
    return max
};
maxProfit([7,1,5,3,6,4])