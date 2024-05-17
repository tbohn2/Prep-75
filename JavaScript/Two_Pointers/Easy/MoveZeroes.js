// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) {
    nums.forEach((num, index) => {
        if (num === 0) {
            nums.splice(index, 1)
            nums.push(num)
        }
    });
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));