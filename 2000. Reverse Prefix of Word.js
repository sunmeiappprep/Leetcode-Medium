var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch)
    console.log(index);
    if (index !== -1){
        let reverse =(word.slice(0,index+1)).split("").reverse("").join("") + word.slice(index+1)
        return reverse

    }
    else{
        return word
    }
};

console.log(reversePrefix("abcdefd","d"))