const reverseString = function(string) {
    let stringSplit = string.split('');
    let reverseArray = stringSplit.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
