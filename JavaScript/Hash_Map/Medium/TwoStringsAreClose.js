// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Determine if the unique letters in each word have matching number of occurrences. 
// If the lengths, letters, and occurrences of unique letters are the same, it is true
var closeStrings = function (word1, word2) {
    // Checks length
    if (word1.length !== word2.length) { return false; }

    let occurrences1 = {};
    let occurrences2 = {};

    for (const letter of word1) {
        occurrences1[letter] = (occurrences1[letter] || 0) + 1;
    }

    for (const letter of word2) {
        occurrences2[letter] = (occurrences2[letter] || 0) + 1;
    }

    let numOfOcc1 = new Set;
    let numOfOcc2 = new Set;

    for (const letter in occurrences2) {
        if (occurrences1[letter] && occurrences2[letter]) {      // Checks presence of matching letters
            numOfOcc1.add(occurrences1[letter])
            numOfOcc2.add(occurrences2[letter])
        }
        else {
            return false;
        }
    }

    // Checks occurrences
    for (const num of numOfOcc2) {
        if (!numOfOcc1.has(num)) { return false; }
    }

    return true;
};

// Very similar solution using Map
// var closeStrings = function (word1, word2) {
//     if (word1.length !== word2.length) {
//         return false;
//     }

//     const countFrequencies = (word) => {
//         const freqMap = new Map();
//         for (let char of word) {
//             freqMap.set(char, (freqMap.get(char) || 0) + 1);
//         }
//         return freqMap;
//     };

//     const freq1 = countFrequencies(word1);
//     const freq2 = countFrequencies(word2);

//     if (new Set(freq1.keys()).size !== new Set(freq2.keys()).size ||
//         [...freq1.keys()].some(char => !freq2.has(char))) {
//         return false;
//     }

//     const sortedFreq1 = Array.from(freq1.values()).sort((a, b) => a - b);
//     const sortedFreq2 = Array.from(freq2.values()).sort((a, b) => a - b);

//     return sortedFreq1.join('') === sortedFreq2.join('');
// };

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("cabbba", "addccc"));
console.log(closeStrings("cabbba", "abcccc"));