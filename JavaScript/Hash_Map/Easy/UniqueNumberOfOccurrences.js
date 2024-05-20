// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

var uniqueOccurrences = function (arr) {
    let mappedNumOfOccurences = {};

    arr.forEach(num => {
        mappedNumOfOccurences[num] = (mappedNumOfOccurences[num] || 0) + 1;
    });

    let occurrenceSet = new Set;
    // For in to iterate over enumerable properties of objects
    for (let count in mappedNumOfOccurences) {
        if (occurrenceSet.has(mappedNumOfOccurences[count])) {
            return false;
        }
        occurrenceSet.add(mappedNumOfOccurences[count]);
    }

    return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));