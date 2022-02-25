//shirking window
//find the two biggest number and compare
//        if (height[start] < height[end]) start++
//        else end --


var maxArea = function(height) {
    let start = 0
    let end = height.length-1
    let max = 0
    while (end > start){
        let smaller = Math.min(height[start],height[end])
        let area = (smaller)*(end-start)
        
        if(area > max) max = area

        if (height[start] < height[end]) start++
        else end --
        console.log(height[start],height[end])
    }
    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))


x