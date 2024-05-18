// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10-5 will be accepted.

// O(n) time, O(1) space
var findMaxAverage = function (nums, k) {
    let total = 0
    let maxAverage = 0
    let start = 0
    let end = k - 1
    for (let i = 0; i < k; i++) {
        total += nums[i];
    }
    while (end < nums.length) {
        let average = total / k
        if (average > maxAverage) { maxAverage = average }
        total -= nums[start]
        start++
        end++
        total += nums[end]
    }
    return maxAverage;

};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));