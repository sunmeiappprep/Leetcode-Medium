// two pointer if while r is out not out of bounds , if p[r] > p[l] , check if difference is greater than max , if not u want to move left point to match right point to skip over ills,
// right pointer always increase regardless of conditon

var maxProfit = function(prices) {
    let max = 0
    let l = 0
    let r = 1
    while (r < prices.length){
        if (prices[r] > prices[l]){
            let diff = prices[r] - prices[l]
            if (diff > max){
                max = diff
            }
        }else{
            l = r
        }
        r++
    }
    console.log(max)
    return max
}
maxProfit([7,1,5,3,6,4])


// let max = 0
// let left = 0
// let right = 1
// while (right < prices.length){
//     if(prices[right]>prices[left]){
//         if(prices[right]-prices[left] > max){
//             max = prices[right]-prices[left] 
//         }   
//     }
//     else{
//         left = right
//     }
//     right ++
// }
// console.log(max)
// return max
// };