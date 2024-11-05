// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Pointer for non-zero int, loop through nums, if number isn't zero, replace at non-zero int pos and move forward in loop, add remaining zeroes to end of array
var moveZeroes = function (nums) {
    let nonZeroPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroPos] = nums[i]
            nonZeroPos++;
        }
    }

    for (let j = nonZeroPos; j < nums.length; j++) {
        nums[j] = 0;
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));