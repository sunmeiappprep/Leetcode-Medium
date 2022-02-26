var largestNumber = function(nums) {
    let numbercount = {}
    let counter = 9
    let string = ""
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i].toString();
        if (numbercount[num[0]]){
            numbercount[num[0]].push(num)
        }
        else{
            numbercount[num[0]] = []
            numbercount[num[0]].push(num)
        }
        // numbercount[num] ? numbercount[num] : numbercount[num]=1
    }

    while(counter > 0){
        if (numbercount[counter] && numbercount[counter].length === 1){
            string += numbercount[counter]
            // console.log(numbercount[counter])
        }
        else if (numbercount[counter]){
            let sorted = numbercount[counter].sort((a,b) => b.charCodeAt(b.length - 1)-a.charCodeAt(a.length - 1))
            string+=sorted.join("")
        }
        else{
        }
        counter --
    }

    return string

};

console.log(largestNumber([3,30,34,5,9]))