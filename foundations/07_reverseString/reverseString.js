const reverseString = function(word) {
    word = word.split("");
    let newWord = [];
    while (word.length > 0) {
        newWord.push(word.pop());
    }

    return newWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
