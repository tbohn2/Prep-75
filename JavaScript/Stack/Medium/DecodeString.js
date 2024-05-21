// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
// Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
// For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// NEEDS ATTENTION

var decodeString = function (s) {
    let numbers = [];
    let letters = [];
    let string = '';
    let k = 0;

    for (const char of s) {
        if (!isNaN(char)) {
            k = k * 10 + char; // In case the number is larger than 9
        }
        if (char === "[") {
            numbers.push(k);
            letters.push(string); // On first round, empty string is pushed into letters; this will be the string that we append everything else to in the end
            k = 0;
            string = '';
        }
        if (/^[a-zA-Z]+$/.test(char)) {
            string += char;
        }
        if (char === "]") {
            let numberOfRepeats = numbers.pop();
            let currentString = letters.pop();
            string = currentString + string.repeat(numberOfRepeats);
        }
    }

    return string;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));