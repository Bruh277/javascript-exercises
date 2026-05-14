const repeatString = function(string, num) {
    
    if(num < 0){
        return "ERROR";
    }

    let i = 0;
    let word = "";

    while(i < num){
        word += string;
        i++;
    }

    return word;

};

// Do not edit below this line
module.exports = repeatString;
