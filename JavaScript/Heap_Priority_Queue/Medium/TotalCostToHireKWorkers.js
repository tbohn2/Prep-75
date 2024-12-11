// You are given a 0 - indexed integer array costs where costs[i] is the cost of hiring the ith worker.

// You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

// You will run k sessions and hire exactly one worker in each session.

// In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
// For example, if costs = [3, 2, 7, 7, 1, 2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the 
// lowest cost[3, 2, 7, 7, 1, 2].
// In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index[3, 2, 7, 7, 2].
// Please note that the indexing may be changed in the process.
// If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
// A worker can only be chosen once.

// Return the total cost to hire exactly k workers.

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallest = index;

            if (leftIndex < length && this.compare(this.heap[leftIndex], this.heap[smallest]) < 0) {
                smallest = leftIndex;
            }
            if (rightIndex < length && this.compare(this.heap[rightIndex], this.heap[smallest]) < 0) {
                smallest = rightIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    compare(a, b) {
        return a[0] - b[0] || a[1] - b[1];
    }
}

// Create a min heap of size candidates for both front and back (including index) of costs then go k rounds with two pointers for the next indices to be added to each heap, 
// finding the smallest cost and adding to total; only add to right heap when left <= right
var totalCost = function (costs, k, candidates) {
    const n = costs.length;
    let left = 0, right = n - 1;
    let totalCost = 0;

    const leftHeap = new MinHeap();
    const rightHeap = new MinHeap();

    for (let i = 0; i < candidates && left <= right; i++) {
        leftHeap.push([costs[left], left]);
        left++;
    }
    for (let i = 0; i < candidates && left <= right; i++) {
        rightHeap.push([costs[right], right]);
        right--;
    }

    for (let i = 0; i < k; i++) {
        let selectedWorker;

        if (leftHeap.size() && (!rightHeap.size() || leftHeap.peek()[0] <= rightHeap.peek()[0])) {
            selectedWorker = leftHeap.pop();

            if (left <= right) {
                leftHeap.push([costs[left], left]);
                left++;
            }
        } else {
            selectedWorker = rightHeap.pop();

            if (left <= right) {
                rightHeap.push([costs[right], right]);
                right--;
            }
        }
        totalCost += selectedWorker[0];
    }

    return totalCost;
};



console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4));
console.log(totalCost([1, 2, 4, 1], 3, 3));
