// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

var maxVowels = function (s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxNumberOfVowels = 0;
    let start = 0;
    let end = k - 1;
    let numberOfVowels = 0
    for (i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            numberOfVowels++;
        }
    }
    while (end < s.length) {
        if (numberOfVowels > maxNumberOfVowels) { maxNumberOfVowels = numberOfVowels }
        if (vowels.includes(s[start])) { numberOfVowels-- };
        start++;
        end++;
        if (vowels.includes(s[end])) { numberOfVowels++ };
    }
    return maxNumberOfVowels;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));