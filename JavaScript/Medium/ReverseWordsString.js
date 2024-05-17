// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
//  The returned string should only have a single space separating the words. Do not include any extra spaces.

var reverseWords = function (s) {
    const array = s.split(' ');
    let reverseArray = []
    for (i = array.length - 1; i >= 0; i--) {
        const word = array[i];
        if (word !== '') {
            reverseArray.push(word)
        }
    }
    const reversedString = reverseArray.join(' ')
    return reversedString;
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('     hello world   '));
console.log(reverseWords('a good    example'));
