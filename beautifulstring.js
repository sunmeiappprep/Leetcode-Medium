function getMinimumOperationCount(s) {
    let abc = 'abcdefghijklmnopqrstuvwx'
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const nextchar = s[i+1]
        const prevchar = s[i-1]

        let indexofcurrentcharplus1 = abc.indexOf(char)+1
        let indexofcurrentcharminus1 = abc.indexOf(char)-1
        let indexofnextchar = abc.indexOf(nextchar)
        let indexofpreviouschar = abc.indexOf(prevchar)
        // console.log(indexofcurrentcharplus1,indexofnextchar)
        if (char === nextchar){
            counter++
        }
        else if(indexofcurrentcharplus1 === indexofnextchar){
            counter++
        }
        else if(indexofcurrentcharminus1 === indexofpreviouschar){
            counter++
        }

        // else if( ==={
        console.log(counter);
        // }
    }
    return counter

}

getMinimumOperationCount('abc')