// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Max of O(n) time and O(1) space

// Track number of flipped; move end to nums.length, stopping and progressing start every time flipped > k
var longestOnes = function (nums, k) {
    let start = 0;
    let flipped = 0;
    let maxLength = 0;

    for (end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            flipped++;
        }
        while (flipped > k) {
            if (nums[start] === 0) {
                flipped--;
            }
            start++
        }
        maxLength = Math.max(end - start, maxLength);
    }

    return maxLength + 1; // add b/c (end - start) is one less than the length
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));