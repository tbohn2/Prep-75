// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

var longestSubarray = function (nums) {
    let longestLengthOfSubA = 0;
    let start = 0;
    let end = 0;
    let deleted = false;
    while (end < nums.length) {
        // deleted ends up being true anyway, so there is more efficient way to do it
        if (nums[end] === 0) {
            while (deleted) {
                if (nums[start] === 0) { deleted = false; }
                start++;
            }
            deleted = true
        }
        end++;

        longestLengthOfSubA = Math.max(longestLengthOfSubA, end - start - 1)

    }
    return longestLengthOfSubA;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));