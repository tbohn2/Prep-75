// Heaps/Priority Queues Overview

// A heap is a specialized binary tree that satisfies the heap property:
// 1. Min-Heap: The parent node is smaller than or equal to its children. 
//    The smallest element is always at the root.
// 2. Max-Heap: The parent node is larger than or equal to its children. 
//    The largest element is always at the root.

// Priority Queue:
// A priority queue is an abstract data structure where each element is associated with a priority.
// Elements with higher priority are dequeued before elements with lower priority.
// Heaps are commonly used to implement priority queues efficiently.

// Heap Representation:
// Heaps are typically implemented using arrays for simplicity.
// - The parent-child relationship is determined by indices:
//   For a node at index `i`:
//   1. Left child index: `2 * i + 1`
//   2. Right child index: `2 * i + 2`
//   3. Parent index: `(i - 1) // 2`

// Example of a Min-Heap (as an array):
// [1, 3, 5, 7, 6, 8, 10]
// Visualization:
//       1
//     /   \
//    3     5
//   / \   / \
//  7   6 8  10

// Common Operations in a Heap:
// 1. Insertion: Add a new element and adjust to maintain the heap property.
//    Time Complexity: O(log n) (due to heapify-up).
// 2. Deletion (Extract Min/Max): Remove the root element and adjust to maintain the heap property.
//    Time Complexity: O(log n) (due to heapify-down).
// 3. Peek: Access the root element without removal.
//    Time Complexity: O(1).

// Example: Min-Heap Insert Operation
function insertHeap(heap, value) {
    heap.push(value); // Add the new value at the end
    let current = heap.length - 1;

    // Heapify-up to maintain the heap property
    while (current > 0) {
        let parent = Math.floor((current - 1) / 2);

        if (heap[current] >= heap[parent]) break; // Heap property satisfied
        [heap[current], heap[parent]] = [heap[parent], heap[current]]; // Swap
        current = parent; // Move up
    }
}

// Example Usage of Min-Heap
let heap = [];
insertHeap(heap, 10);
insertHeap(heap, 5);
insertHeap(heap, 1);
insertHeap(heap, 7);

console.log("Min-Heap after insertions:", heap);
// Expected Output: [1, 7, 5, 10]

// Notes:
// 1. Heaps are commonly used in:
//    - Priority queues
//    - Dijkstra's algorithm for shortest paths
//    - Huffman encoding for data compression
// 2. A heap is not a sorted structure, but it provides efficient access to the smallest/largest element.
