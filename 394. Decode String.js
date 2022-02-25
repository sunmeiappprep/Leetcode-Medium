var decodeString = function(s) {
    let splited = s.split("[")
    for (let index = 0; index < splited.length; index++) {
        const element = splited[index];
        console.log(element)
    }
};
decodeString("3[a]2[bc]")
