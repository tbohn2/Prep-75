// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
//  If no such indices exists, return false.

// O(n) space and time
// var increasingTriplet = function (nums) {
//     let boolArray = new Array(nums.length).fill(false)
//     let tripletPresent = false
//     for (i = 2; i < nums.length; i++) {
//         if (nums[i - 2] < nums[i - 1] && nums[i - 1] < nums[i]) { boolArray[i] = true }
//     }
//     for (let i = 0; i < boolArray.length; i++) {
//         if (boolArray[i] === true) { tripletPresent = true }
//     }
//     return tripletPresent;
// };

// O(n) time and O(1) space but only finds adjacent values
// var increasingTriplet = function (nums) {
//     let tripletPresent = false
//     for (i = 2; i < nums.length; i++) {
//         if (nums[i - 2] < nums[i - 1] && nums[i - 1] < nums[i]) { tripletPresent = true }
//     }
//     return tripletPresent;
// };

// O(n) time and O(1) extra space
var increasingTriplet = function (nums) {
    let tripletPresent = false
    let first = Infinity;
    let second = Infinity;

    nums.forEach(num => {
        if (num <= first) { first = num }
        // If num > first, else if called
        else if (num <= second) { second = num; }
        // If num > first && num > second
        else { tripletPresent = true; }
    });

    return tripletPresent;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));