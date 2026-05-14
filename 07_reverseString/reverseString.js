const reverseString = function(string) {

    const word = string;

    let characterArray = word.split('');
    let reversedArray = characterArray.reverse();
    let reversedWord = reversedArray.join('');

    return reversedWord;
    
};

// Do not edit below this line
module.exports = reverseString;
