// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// O(max(n,m)) time, O(n+m) space
var mergeAlternately = function (word1, word2) {
    let newWord = '';
    const greatestLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < greatestLength; i++) {
        if (i < word1.length) {
            newWord += word1[i]
        }
        if (i < word2.length) {
            newWord += word2[i]
        }
    }

    return newWord;
};

mergeAlternately('abc', 'pqr')
mergeAlternately('ab', 'pqrs')
mergeAlternately('abcd', 'pq')