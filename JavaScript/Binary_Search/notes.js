// Binary Search Overview

// Binary Search is an efficient algorithm used to find the position of a target element in a sorted array.
// It works by repeatedly dividing the search range in half, reducing the problem size at each step.

// Prerequisite:
// 1. The array must be sorted.

// Steps of Binary Search:
// 1. Define the search range with two pointers: `left` (start) and `right` (end).
// 2. Calculate the middle index: `mid = Math.floor((left + right) / 2)`.
// 3. Compare the middle element with the target:
//    - If middle element == target, return the index (`mid`).
//    - If middle element < target, narrow the range to the right: `left = mid + 1`.
//    - If middle element > target, narrow the range to the left: `right = mid - 1`.
// 4. Repeat until the range is empty (`left > right`).

// Complexity:
// 1. Time Complexity: O(log n) — The search space is halved at each step.
// 2. Space Complexity: O(1) — Uses a constant amount of memory.

// Example of Binary Search:
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid; // Target found
        if (arr[mid] < target) left = mid + 1; // Search the right half
        else right = mid - 1; // Search the left half
    }

    return -1; // Target not found
}

// Example Usage of Binary Search
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

console.log("Index of target:", binarySearch(arr, target));
// Expected Output: Index of target: 3

// Notes:
// 1. Binary search is applicable only to sorted data. If the data is unsorted, it must be sorted first.
// 2. It's commonly used in scenarios like:
//    - Finding elements in sorted arrays or lists.
//    - Searching in rotated sorted arrays.
//    - Solving algorithmic problems like finding square roots or peak elements.
// 3. Variants of binary search can solve problems like finding the first/last occurrence of a value or the smallest/largest value meeting a condition.

// Example: Finding the First Occurrence of a Target
function findFirstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Record the position
            right = mid - 1; // Continue searching left for the first occurrence
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log("First occurrence of target:", findFirstOccurrence([1, 2, 2, 2, 3, 4], 2));
// Expected Output: First occurrence of target: 1
