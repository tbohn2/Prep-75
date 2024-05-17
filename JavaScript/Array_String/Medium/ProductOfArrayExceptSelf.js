// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// O(n) time means time increases linearly with larger array; 

// O(n*n) answer (because loop inside loop for each n):
// var productExceptSelf = function (nums) {
//     const result = []
//     nums.forEach((num, index) => {
//         let product = 1
//         nums.forEach((otherNum, i) => {
//             if (index !== i) {
//                 product *= otherNum
//             }
//         })
//         result.push(product)
//     })
//     return result;
// };

// O(1) extra space complexity because only the result grows in size with larger nums array and O(n) time because single loops
var productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    // Store each previous product in result array
    for (i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Start at end of array, multiply it by 1 because it is the end, then set that new value equal to the suffixProduct times the nums[i+1] and move one towards start of array
    let suffixProduct = 1
    for (let I = nums.length - 1; I >= 0; I--) {
        result[I] = result[I] * suffixProduct
        suffixProduct *= nums[I];
    }

    return result;
};


console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));