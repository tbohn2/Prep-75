// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Calculate the GCD of lengths, Get the possible substring from str1, check if the candidate can divide both strings
// O(n) time (repeating possible divisor and comparing), O(n) space for repeat
var gcdOfStrings = function (str1, str2) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b; // if a is less than b, remainder is a
            a = temp;
        }
        return a;
    }

    const greatestPossLength = gcd(str1.length, str2.length);
    const possibleDivisor = str1.slice(0, greatestPossLength);

    const numOfRepeats1 = str1.length / greatestPossLength
    const numOfRepeats2 = str2.length / greatestPossLength

    if (possibleDivisor.repeat(numOfRepeats1) === str1 && possibleDivisor.repeat(numOfRepeats2) === str2) {
        return possibleDivisor;
    }

    return '';
};

console.log(gcdOfStrings('abcabc', 'abc'));
console.log(gcdOfStrings('ababab', 'ab'));
console.log(gcdOfStrings('leet', 'code'));