var mostWordsFound = function(sentences) {
    let max = 0
    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        let length = sentence.split(" ").length
        if (length > max) max = length
    }

    return max
};

