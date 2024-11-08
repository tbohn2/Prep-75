// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Count zeroes along the way; move end to nums.length, stopping and moving start forward when 2 zeroes counted
var longestSubarray = function (nums) {
    let start = 0;
    let maxLength = 0;
    let zeroes = nums[start] === 0 ? 1 : 0;

    for (let end = 1; end < nums.length; end++) {
        if (nums[end] === 0) {
            zeroes++;
            while (zeroes > 1) {
                if (nums[start] === 0) {
                    zeroes--;
                }
                start++;
            }
        }
        maxLength = Math.max(end - start, maxLength);
    }

    return maxLength;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));