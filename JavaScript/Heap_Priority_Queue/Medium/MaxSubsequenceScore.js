// You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

// For chosen indices i0, i1, ..., ik - 1, your score is defined as:

// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
// Return the maximum possible score.

// A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

// Sort nums2 and get array of indices, loop through indices tracking sum and values with min heap, comparing if heap has k length to determin max score
var maxScore = function (nums1, nums2, k) {
    const n = nums1.length;
    const indices = Array.from({ length: n }, (_, i) => i);

    indices.sort((a, b) => nums2[b] - nums2[a]);

    const minHeap = [];
    let sum = 0;
    let maxScore = 0;

    for (const idx of indices) {
        const num1 = nums1[idx];
        const num2 = nums2[idx];

        let prevSum = sum
        sum += num1;

        minHeap.push(num1);
        minHeap.sort((a, b) => a - b); // Keep the smallest element at the top

        // If heap size exceeds k, remove the smallest element
        if (minHeap.length > k) {
            sum -= minHeap.shift();
        }

        // Some intermediate scores would be invalid when an added num1 value is immediately removed from the heap. However, because nums2 is sorted in descending order, 
        // this means the invalid score will be multiplied by a lower num2 value than earlier calculations. As a result, the maximum score remains unaffected.
        if (minHeap.length === k && prevSum !== sum) {
            maxScore = Math.max(maxScore, sum * num2); // The greatest number to ever multiply by is the kth largest in nums2
        }
    }

    return maxScore;
};

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3));
console.log(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1));
console.log(maxScore([4, 2, 3, 1], [4, 3, 2, 1], 3));
