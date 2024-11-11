// Given the head of a singly linked list, reverse the list, and return the reversed list.

// A linked list is a linear data structure where elements are not stored in contiguous memory locations. Instead, each element, called a node, contains two parts:

// Data: The value or information the node holds.
// Pointer (or Reference): A reference (or link) to the next node in the sequence.

// Types of Linked Lists:

// Singly Linked List:
// Each node has a single pointer to the next node.
// The last node points to null, indicating the end of the list.

// Doubly Linked List:
// Each node has two pointers: one to the next node and another to the previous node.
// The first node's previous pointer and the last node's next pointer are null.

// Circular Linked List:
// In a circular linked list, the last node points back to the first node, creating a loop.
// Can be singly or doubly linked.

// The first node is the head


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class LinkedList {
    constructor() {
        this.head = null; // Initially, the list is empty, so the head is null
    }

    // Method to append a new node at the end of the list
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
            return;
        }
        let current = this.head; // Starts at the head
        while (current.next) {// Goes to the end of the list until current.next is null, signifying the end of the list
            current = current.next;
        }
        current.next = newNode; // Link the last node to the new node
    }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);


// For each node, made prev next and next prev
var reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

console.log(reverseList(ll.head));