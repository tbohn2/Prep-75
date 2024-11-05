// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// O(n) time means time increases linearly with larger array; 

// O(1) extra space complexity because only the result grows in size with larger nums array and O(n) time because single loops
// Start at end of array, multiply it by 1 because it is the end, then set that new value equal to the suffixProduct times the nums[i+1] and move one towards start of array

// Initialize answer array with 1s
// Step 1: Calculate left products
// answer[i] will hold the product of all elements to the left
// Update left_product for the next index

// Step 2: Calculate right products
// Multiply by the product of all elements to the right
// Update right_product for the next index

var productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    let left_product = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left_product
        left_product *= nums[i];
    }

    let right_product = 1;
    for (let j = nums.length - 1; j > -1; j--) {
        answer[j] *= right_product;
        right_product *= nums[j];
    }

    return answer; // Return the final answer array
};


console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));