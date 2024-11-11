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
// ll.append(6);

// Start at even and odd heads, set node that is 2 away as next then move to next node until the end of the list, set even head as odd end next
var oddEvenList = function (head) {
    if (!head || !head.next) return head;

    const evenStart = head.next;
    let evenCurrent = head.next;
    let oddCurrent = head;

    while (evenCurrent && evenCurrent.next) { // When there is no even or no odd after the current even, that is the end of the list; no need to track prev
        oddCurrent.next = oddCurrent.next.next;
        evenCurrent.next = evenCurrent.next.next;

        oddCurrent = oddCurrent.next;
        evenCurrent = evenCurrent.next;
    }

    oddCurrent.next = evenStart;

    return head;
};

console.log(oddEvenList(ll.head));