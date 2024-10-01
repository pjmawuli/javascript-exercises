const reverseString = function(text) {
    textList = text.split("")
    reversed_text = ""

    for (let i = textList.length - 1; i >= 0; i--) {
        reversed_text += textList[i] 
    }
    return reversed_text
};


// Do not edit below this line
module.exports = reverseString;
