var finalPrices = function(prices) {
    let arr = []
    for (let i = 0; i < prices.length; i++) {
        const first = prices[i];
        for (let x = i+1; x < prices.length; x++) {
            const second = prices[x];
            if (first > second){
                arr.push(first-second)
                break
            }
            else if (x === prices.length-1){
                arr.push(first)
            }
        }
    }
    arr.push(prices[prices.length-1])
    return arr
};

console.log(finalPrices([8,4,6,2,3]));