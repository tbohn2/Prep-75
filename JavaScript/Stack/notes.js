// Stack

// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle (unlike queue which follows FIFO). The element that is added last is the one that is removed first.

// Operations:
// Push: Add an element to the top of the stack, just like queue.
// Pop: Remove an element from the top of the stack.
// Peek/Top: View the element at the top of the stack without removing it.
// IsEmpty: Check if the stack is empty.

// Usage:
// Stacks are used in scenarios where reverse order is needed, such as function call management, depth-first search (DFS) in graphs, and undo mechanisms in text editors.

// Example
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}