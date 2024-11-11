// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

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
ll.append(3);
ll.append(4);
ll.append(7);
ll.append(1);
ll.append(2);
ll.append(6);

// Two pointers; move one twice as fast through list until end then set the next node after the middle node as the next node for the previous node
var deleteMiddle = function (head) {
    if (!head.next) { return null; }

    let prev = head;
    let middleNode = head;
    let endNode = head;
    while (endNode && endNode.next) { // The middle node is found at the lower of length/2, thus the count stops if at the end or if the end was passed by one node, depending if length is even or odd
        prev = middleNode;
        middleNode = middleNode.next
        endNode = endNode.next.next
    }

    prev.next = middleNode.next
    return head;
};

console.log(deleteMiddle(ll.head));