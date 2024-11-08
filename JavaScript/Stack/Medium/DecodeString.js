// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
// Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
// For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Letter and number stack, vars for current string and current number; loop through the string, if number, build up k, 
//if [, push k and current string to stacks, reset k and current string,
// if ], pop k and current string from stacks, repeat current string k times, add to current string; return current string
// if letter, add to current string
var decodeString = function (s) {
    const numbers = [];
    const letters = [];
    let currentString = '';
    let k = 0;

    for (const char of s) {
        if (!isNaN(char)) {
            k = k * 10 + Number(char);
        }
        else if (char === '[') {
            letters.push(currentString);
            numbers.push(k);
            k = 0;
            currentString = '';
        }
        else if (char === ']') {
            const repeats = numbers.pop()
            currentString = letters.pop() + currentString.repeat(repeats);
        }
        else {
            currentString += char;
        }
    }

    return currentString;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));