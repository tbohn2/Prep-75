// Breadth-First Search (BFS) Traversal of a Binary Tree

// Breadth-first search proceeds level by level, visiting all nodes at the current depth (horizontal level) before moving to the next depth.
// This is achieved using a queue, where nodes are processed in the order they are added, ensuring each level is fully traversed before moving down.

// Root of the binary tree is the top (same as DFS).

// BFS Traversal Method (also known as Level Order Traversal):
// 1. Visit the root node.
// 2. Traverse each level of the tree from top to bottom, left to right.
// 3. Enqueue children of the node after visiting the node, so they are processed in the next level.

// The primary method of BFS is Level Order Traversal, which is widely used in applications requiring node processing level by level.

// Example of Iterative Breadth-First Search (BFS) Traversal Using a Queue

function levelOrderTraversal(root) {
    if (root === null) return [];
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        let levelNodes = [];

        // Process each node at the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Dequeue the node

            levelNodes.push(node.val); // Add the node's value to the level result

            // Enqueue left and right children (if they exist)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelNodes); // Append the level result to the overall result
    }

    return result; // Result will contain each level as a subarray
}

// Example Usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Level Order Traversal:", levelOrderTraversal(root));
// Expected Output: [[1], [2, 3], [4, 5, 6]]

// Breadth-First Search (BFS) Traversal is efficient for:
// Finding the shortest path in unweighted graphs
// Traversing each level individually in tree or graph structures
// Applications where we need to check nodes level-by-level (e.g., finding nodes at a specific depth)

// Notes:
// 1. BFS generally uses a queue, while DFS typically uses a stack (or recursion).
// 2. BFS traversal complexity is O(n) since it visits each node once, with space complexity of O(w) where w is the maximum width of the tree.
// 3. BFS is memory-intensive if the tree has many nodes at the same level (wide trees).

// Iterative vs. Recursive:
// - Iterative BFS is common since it’s straightforward with a queue.
// - Recursive BFS is less common and requires advanced techniques to manage levels effectively.
