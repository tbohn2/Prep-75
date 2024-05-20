// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Sets only contain unique values of any type

var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let notInNums2 = new Set
    let notInNums1 = new Set

    // No need to check if set has num before adding because only unique values are allowed
    nums1.forEach(num => {
        if (!set2.has(num)) { notInNums2.add(num) }
    })

    nums2.forEach(num => {
        if (!set1.has(num)) { notInNums1.add(num) }
    })

    return [Array.from(notInNums2), Array.from(notInNums1)];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));