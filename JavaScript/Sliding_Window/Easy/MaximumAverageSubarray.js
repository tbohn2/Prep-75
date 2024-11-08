// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10-5 will be accepted.

// Average k numbers, advance one and compare
// O(n) time, O(1) space
var findMaxAverage = function (nums, k) {
    let maxTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i < k) { // get initial total
            maxTotal += nums[i];
        } else { // compare totals after getting initial
            total = maxTotal - nums[i - k] + nums[i];
            maxTotal = Math.max(total, maxTotal);
        }
    }

    return maxTotal / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));