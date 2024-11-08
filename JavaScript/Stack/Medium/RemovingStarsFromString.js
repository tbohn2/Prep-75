// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

// Store letters in stack; loop through string, if star pop else push letrer
var removeStars = function (s) {
    const stack = [];

    for (const char of s) {
        if (char === '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));