const repeatString = function(text, num) {
    if (num >= 0) {
        new_text = ""
        for (let count = 0; count < num; count++) {
            new_text += text
        }
        return new_text
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
