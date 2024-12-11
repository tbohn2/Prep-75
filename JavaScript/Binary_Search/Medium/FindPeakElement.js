// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

// Two pointers, find mid and compare neighbors for max, moving pointer until mid is found and returned
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If right is lower, move right to mid, otherwise move left toward end until it reaches the peak
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

console.log(findPeakElement([1, 2, 3, 4]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));