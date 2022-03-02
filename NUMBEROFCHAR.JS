function numberOfCharactersEscaped(expression) {
    let locationOfnumber = []
    let abc = 'qwertyuiopasdfghjklzxcvbnm'
    let counter = 0
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if(char === "#"){
            locationOfnumber.push(i)
        }
        
    }

   
    let sliced = expression.slice(locationOfnumber[0]+1,locationOfnumber[locationOfnumber.length-1])
    console.log(sliced);
    for (let i = 0; i < sliced.length; i++) {
        const char = sliced[i];
        const nextchar = sliced[i+1];

        if(char === "!"){
            if (abc.includes(nextchar)){
                counter++
                console.log(char,nextchar)

            }
        }
        
    }


    return counter
}

console.log(numberOfCharactersEscaped('!#!#!!y#b#w!wp!#!lhu!l!uef!lj!!lfmsuyj!!#!#o!!!x#b'));


// function getUmbrellas(requirement, sizes) {
//     for (let i = 0; i < sizes.length; i++) {
//         const num = sizes[i];
//         for (let j = x+1; j < array.length; j++) {
//             const element = array[j];
            
//         }
//     }
// }

// console.log(getUmbrellas(10,[2,6,5]));