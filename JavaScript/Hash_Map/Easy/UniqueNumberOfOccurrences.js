// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// map object with number and count of repeats in array, new Set of occurences, checking set if occurrences exist and return false if so
var uniqueOccurrences = function (arr) {
    let map = {};

    arr.forEach(num => {
        map[num] = (map[num] || 0) + 1;
    })

    let occurrences = new Set;

    for (const num in map) {
        if (occurrences.has(map[num])) {
            return false;
        }
        occurrences.add(map[num])
    }

    return true;
};

// Same logic, more concise
var uniqueOccurrences = function (arr) {
    const map = arr.reduce((acc, num) => acc.set(num, (acc.get(num) || 0) + 1), new Map());
    const occurrences = new Set(map.values());
    return map.size === occurrences.size; // Because sets only contain unique values, this works
};


console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));