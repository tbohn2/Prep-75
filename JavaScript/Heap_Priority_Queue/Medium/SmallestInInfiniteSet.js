// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:

// SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

// Class with minHeap of added values, set of numbers in heap, and the current smallest value in the set
class SmallestInfiniteSet {
    constructor() {
        this.minHeap = [];
        this.numsInHeap = new Set();
        this.currentSmallest = 1;
    }

    // Return smallest value or root of heap if it exists
    popSmallest() {
        if (this.minHeap.length > 0) {
            const removedValue = this.minHeap.shift();
            this.numsInHeap.delete(removedValue);
            return removedValue;
        } else {
            return this.currentSmallest++; // post-increment, incremented after its current value is returned
        }
    }

    // Add number into heap if it is not there and sort
    addBack(num) {
        if (num < this.currentSmallest && !this.numsInHeap.has(num)) {
            this.numsInHeap.add(num);
            this.minHeap.push(num);
            this.minHeap.sort((a, b) => (a - b))
        }
    }
}


const set = new SmallestInfiniteSet();

console.log(set.popSmallest()); // 1
console.log(set.popSmallest()); // 2

set.addBack(1); // Add 1 back to the set
console.log(set.popSmallest()); // 1
console.log(set.popSmallest()); // 3
