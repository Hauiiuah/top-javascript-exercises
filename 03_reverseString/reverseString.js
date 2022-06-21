const reverseString = function(str) {
    const strArray = str.split('')
    strArray.reverse()
    const revString = strArray.join('')
    return revString
};

// Do not edit below this line
module.exports = reverseString;
