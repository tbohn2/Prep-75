// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.


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
ll.append(5);
ll.append(4);
ll.append(2);
ll.append(1);

// Find middle node, flip second half, add nodes
var pairSum = function (head) {
    if (!head || !head.next) return 0;

    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    let current = slow;
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    // Now 'prev' is the head of the reversed second half

    // Calculate the twin sums and find the maximum twin sum
    let maxSum = 0;
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf) { // When the secondHalf.next = null, secondHalf is set to null and while loop is exited
        let sum = firstHalf.val + secondHalf.val;
        if (sum > maxSum) {
            maxSum = sum;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return maxSum;
};

console.log(pairSum(ll.head));