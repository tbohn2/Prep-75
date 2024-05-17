// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var gcdOfStrings = function (str1, str2) {
    if (str1.includes(str2)) {
        const result = str1.replace(str2, '')
        return result;
    }
    if (str2.includes(str1)) {
        const result = str2.replace(str1, '')
        return result;
    }
    else {
        return ''
    }
};

console.log(gcdOfStrings('abcabc', 'abc'));
console.log(gcdOfStrings('ababab', 'ab'));
console.log(gcdOfStrings('leet', 'code'));