// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

var mergeAlternately = function (word1, word2) {
    const a1 = word1.split('')
    const a2 = word2.split('')
    const max = Math.max(a1.length, a2.length)
    let newA = []
    for (let i = 0; i < max; i++) {
        if (i < a1.length) {
            newA.push(a1[i])
        }
        if (i < a2.length) {
            newA.push(a2[i])
        }
    }
    newWord = newA.join('')
    console.log(newWord);
    return newWord
};

mergeAlternately('abc', 'pqr')
mergeAlternately('ab', 'pqrs')
mergeAlternately('abcd', 'pq')