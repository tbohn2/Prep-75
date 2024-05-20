// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Both solutions iterate through the array twice, once to get a sum and a second time to discover the pivot index
var pivotIndex = function (nums) {
    let pivotI = -1;
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    for (i = 1; i < nums.length; i++) {
        rightSum += nums[i]
    }
    while (index < nums.length) {
        if (rightSum === leftSum) {
            pivotI = index;
            break;
        }
        else {
            leftSum += nums[index]
            index++
            rightSum -= nums[index]
        }
    }
    return pivotI;
};

// Using reduce
var pivotIndex = function (nums) {
    let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1; // If no pivot index found
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));