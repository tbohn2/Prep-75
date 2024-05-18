// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

// O(n log n) time because of sort()
var maxOperations = function (nums, k) {
    nums.sort()
    let numberOfOperations = 0
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const sum = nums[start] + nums[end];
        if (sum > k) {
            end--;
        }
        else if (sum < k) {
            start++
        }
        else {
            start++
            end--
            numberOfOperations++
        }
    }
    return numberOfOperations;
};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));