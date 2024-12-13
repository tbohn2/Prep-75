// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

const phoneDigits = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

// Use backtracking to go through each index of digits, looping through the corresponding letters to the digit and recursively calling the backtracking function with
// the index increase by one and the path with letter pushed, then pop letter; return in backtrack function when the index equals the digits length
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const combinations = [];

    const backtrack = (index, path) => {
        if (index === digits.length) {
            combinations.push(path.join(''));
            return;
        }

        const letters = phoneDigits[digits[index]]

        for (const letter of letters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    }

    backtrack(0, [])

    return combinations;

};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
