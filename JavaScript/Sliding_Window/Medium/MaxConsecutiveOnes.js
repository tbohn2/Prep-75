// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Max of O(n) time and O(1) space
var longestOnes = function (nums, k) {
    let maxConsecOnes = 0;
    let start = 0;
    let end = 1;
    let consecOnes = 0;
    let flippedZero = 0;
    if (k > 0) { consecOnes++; }
    if (nums[start] === 0) { flippedZero++; };
    while (end < nums.length) {
        if (consecOnes > maxConsecOnes) { maxConsecOnes = consecOnes };
        if (nums[end] === 1) { consecOnes++ }
        if (nums[end] === 0) {
            consecOnes++;
            flippedZero++;
        }
        // Only occurs when nums[end] === 0 therefore flippedZero = 1
        while (flippedZero > k) {
            if (nums[start] === 0) { flippedZero-- }
            consecOnes--
            start++
        }
        end++;
    }
    return maxConsecOnes;
};

// More consise:
var longestOnes = function (nums, k) {
    let maxConsecOnes = 0;
    let start = 0;
    let end = 0;
    let flippedZero = 0;
    while (end < nums.length) {
        if (nums[end] === 0) {
            flippedZero++;
        }
        while (flippedZero > k) {
            if (nums[start] === 0) { flippedZero-- }
            start++
        }
        end++;
        maxConsecOnes = Math.max(maxConsecOnes, end - start);
    }
    return maxConsecOnes;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));