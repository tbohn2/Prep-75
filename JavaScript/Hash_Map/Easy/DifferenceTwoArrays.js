// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Sets only contain unique values of any type, thus is set1 and set2, there are no repeated values
// Map.has(x) will search for a key that matches x, not for values

var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let uniqueIn1 = [];
    let uniqueIn2 = [];

    // const uniqueIn1 = [...set1].filter(num => !set2.has(num)); // Filter method works the same
    set1.forEach(num => {
        if (!set2.has(num)) {
            uniqueIn1.push(num);
        }
    })

    set2.forEach(num => {
        if (!set1.has(num)) {
            uniqueIn2.push(num);
        }
    })

    return [uniqueIn1, uniqueIn2];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));