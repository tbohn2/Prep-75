// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

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


var oddEvenList = function (head) {
    const firstEven = head.next;
    let currentEven = head.next;
    let currentOdd = head;
    let prevOdd = null;

    while (currentEven && currentEven.next) {
        prevOdd = currentOdd;
        currentOdd = currentEven.next;
        prevOdd.next = currentOdd;
        if (!currentOdd.next) {
            currentEven.next = null;
            break;
        }
        else {
            currentEven.next = currentOdd.next;
            currentEven = currentEven.next;
        }
    }

    currentOdd.next = firstEven;

    return head;

};

console.log(oddEvenList(ll.head));