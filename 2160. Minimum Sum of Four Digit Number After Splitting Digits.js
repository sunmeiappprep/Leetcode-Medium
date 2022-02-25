var minimumSum = function (num) {
    let arr = (num + "")
        .split("")
        .map((x) => +x)
        .sort((a, b) => a - b);
    // console.log((num + "").split("").map((x) => +x))
    let new1 = arr[0] + "" + arr[3];
    let new2 = arr[1] + "" + arr[2];
    return +new1 + +new2;
};
console.log(minimumSum(2932))