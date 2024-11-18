// Properties of BST:
// 1. **Ordered structure**: Ensures that for any node, all nodes in the left subtree are smaller, and all nodes in the right subtree are larger.
// 2. **Efficient search**: Since left children are smaller and right children are larger, binary search principles allow us to skip half of the tree at each step, making searching more efficient.
// 3. **Insertion and deletion**: Inserting and deleting nodes also follows the same binary search principles, keeping operations efficient.

// Binary Search Tree Operations:
// 1. **Search**: To search for a value, start at the root and compare it to the target value.
//    - If the target is less than the current node, move to the left child.
//    - If the target is greater than the current node, move to the right child.
//    - Repeat until you find the node or reach a null node.
// 2. **Insertion**: Similar to search, but when you reach a null node, insert the new value at that position.
// 3. **Deletion**: Deletion is a bit more complex, with different cases:
//    - If the node to be deleted has no children, simply remove it.
//    - If the node has one child, replace the node with its child.
//    - If the node has two children, replace it with its in-order successor or predecessor, then remove the successor/predecessor node.

// Example of a Binary Search Tree:
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Example BST:
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);

// In this tree:
// - Nodes less than 10 (e.g., 3, 5, 7) are in the left subtree.
// - Nodes greater than 10 (e.g., 15, 20) are in the right subtree.

// Binary Search Tree (BST) Efficiency:
// 1. **Time Complexity**:
//    - Search, insertion, and deletion operations have an average time complexity of O(log n) (for a balanced tree).
//    - In the worst case (if the tree is unbalanced), the time complexity becomes O(n), where n is the number of nodes.
// 2. **Space Complexity**: O(h), where h is the height of the tree (this is the space required for the recursion stack or the tree traversal).

// Binary Search Tree Usage:
// - Efficient for lookups, insertions, and deletions in scenarios where data is ordered.
// - Common in applications like databases, file systems, and priority queues.
