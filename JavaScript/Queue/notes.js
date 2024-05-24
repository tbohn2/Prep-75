// Queue

// A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The element that is added first is the one that is removed first.
// These are like stacks except stacks follow the Last In, Last Out (LIFO) Principle

// Operations:
// Enqueue: Add an element to the end of the queue. This is similar to stack where elements are added to the back.
// Dequeue: Remove an element from the front of the queue.
// Peek/Front: View the element at the front of the queue without removing it.
// IsEmpty: Check if the queue is empty.

// Usage:
// Queues are used in scenarios where order needs to be preserved, such as task scheduling, breadth-first search (BFS) in graphs, and managing requests in servers.

// Example:

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2