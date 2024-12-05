// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Heap-Based Approach: O(nlogk) More efficient when k≪n, because the log operations are performed on a much smaller value (k) than n.
// Sorting-Based Approach: O(nlogn) Sorting is more efficient when k≈n, as the heap-based approach's advantage diminishes.

// Create min heap of length k to make root the kth largest element, replace root with end of heap and reorder when length is greater than k
function findKthLargest(nums, k) {
    const minHeap = [];

    for (const num of nums) {
        minHeap.push(num);
        let current = minHeap.length - 1;

        // Put new entry in order
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);
            if (minHeap[current] >= minHeap[parent]) break;
            [minHeap[current], minHeap[parent]] = [minHeap[parent], minHeap[current]];
            current = parent;
        }

        // Delete min (root) if length exceeds k; pop off heap and make it the root then reorder
        if (minHeap.length > k) {
            minHeap[0] = minHeap.pop();
            let parent = 0;

            while (true) {
                const left = 2 * parent + 1;
                const right = 2 * parent + 2;
                let smaller = parent;

                if (left < minHeap.length && minHeap[left] < minHeap[smaller]) {
                    smaller = left;
                }
                if (right < minHeap.lengthk && minHeap[right] < minHeap[smaller]) {
                    smaller = right;
                }
                if (smaller === parent) { break; }

                [minHeap[parent], minHeap[smaller]] = [minHeap[smaller], minHeap[parent]];

                parent = smaller;
            }
        }
    }

    // The root of the heap is the kth largest element
    return minHeap[0];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
