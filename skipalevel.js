function maximumPoints(k, costs) {
    // Write your code here
    let n = costs.length
    let counter = 0
    let max = Math.max(...costs)
    let current = 0
    let points = 0
    let didnotskip = true
    while (k > current && counter < n){
        for (let index = 0; index < costs.length; index++) {
            const cost = costs[index];
            current += cost
            points++
            console.log(index);
            console.log(k,current)
            counter ++

            if (k < current && didnotskip){
                console.log("proced")
                didnotskip = false
                current -= max
                points --
            }else if (k < current){
                points --
            }
        }
    }
    console.log(points)
    return (points)

}
console.log(maximumPoints(15,[3,2,6,4,6,1]))
