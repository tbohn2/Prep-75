// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Move end until window is size of k, then move start with each loop, counting down vowels when start position contains vowel; check against max count each loop
var maxVowels = function (s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;
    let maxVowelCount = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (vowels.has(s[end])) {
            vowelCount++;
        }

        if (end - start + 1 > k) {
            if (vowels.has(s[start])) {
                vowelCount--;
            }
            start++;
        }

        maxVowelCount = Math.max(maxVowelCount, vowelCount);
    }

    return maxVowelCount;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));