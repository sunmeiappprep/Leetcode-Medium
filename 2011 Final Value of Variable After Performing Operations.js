var finalValueAfterOperations = function(operations) {
    let counter = 0
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        if (operation === "++X" || operation === "X++" ){
            counter ++
        }
        else{
            counter --
        }
    }
    return counter
};