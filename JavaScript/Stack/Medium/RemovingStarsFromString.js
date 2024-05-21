// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

var removeStars = function (s) {
    let index = 0;
    while (index < s.length) {
        if (s.charAt(index) === '*') {
            s = s.slice(0, index - 1) + s.slice(index + 1, s.length)
            index--; // Since two characters are removed, index must be decreased to return to position where it was before
        }
        else {
            index++;
        }
    }
    return s;
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));