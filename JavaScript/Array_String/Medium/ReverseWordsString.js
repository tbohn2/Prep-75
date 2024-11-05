// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
//  The returned string should only have a single space separating the words. Do not include any extra spaces.

// Split into array, filter out empty strings and reverse array
var reverseWords = function (s) {
    // const words = s.split(' ').filter(word => word !== '').reverse(); // Simplest
    const words = s.split(' ').filter(word => word !== '')
    let j = words.length - 1;
    for (i = 0; i < j; i++) {
        [words[i], words[j]] = [words[j], words[i]]
        j--
    }

    return words;

};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('     hello world   '));
console.log(reverseWords('a good    example'));
