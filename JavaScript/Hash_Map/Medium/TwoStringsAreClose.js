// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
// If the lengths, occurrences, and letters are the same, it is true
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    let map1 = new Map;
    let map2 = new Map;

    for (let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
        map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
    }

    if (!Array.from(map1.keys()).every(key => map2.has(key))) {
        return false
    };

    let values1 = Array.from(map1.values()).sort();
    let values2 = Array.from(map2.values()).sort();

    return values1.toString() === values2.toString();
};

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("cabbba", "addccc"));
console.log(closeStrings("cabbba", "abcccc"));