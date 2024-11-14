// Depth first search is to proceed vertically going horizontally
// To achieve this, a stack is used to not proceed horizontally until the first vertical line is out of nodes

// Root of binary tree is the top

// Depth-First Search (DFS) Traversal Methods

// Preorder Traversal: // Will go all the way down left, getting each value along the way, until there is no more, then hits right; NLR at each node
// Visit the root node.
// Traverse the left subtree in preorder.
// Traverse the right subtree in preorder.

// Inorder Traversal: // Will go all the way down left until no left subtree, then will visit value and then hit right subtree, repeating down left; LNR at each node
// Traverse the left subtree in inorder.
// Visit the root node.
// Traverse the right subtree in inorder.

// Postorder Traversal: // Gets all the lowest hanging values before reaching the root; LRN at each node
// Traverse the left subtree in postorder.
// Traverse the right subtree in postorder.
// Visit the root node.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Below are recursive implementations of Preorder, Inorder, and Postorder Traversal of a Binary Tree

// Preorder Traversal (Node-Left-Right)
function preorderTraversal(root) {
    if (root === null) return [];
    let result = [];
    function dfs(node) {
        if (node) {
            result.push(node.val); // Visit the root node
            dfs(node.left); // Traverse the left subtree
            dfs(node.right); // Traverse the right subtree
        }
    }
    dfs(root);
    return result;
}

// Inorder Traversal (Left-Node-Right)
function inorderTraversal(root) {
    if (root === null) return [];
    let result = [];
    function dfs(node) {
        if (node) {
            dfs(node.left); // Traverse the left subtree
            result.push(node.val); // Visit the root node
            dfs(node.right); // Traverse the right subtree
        }
    }
    dfs(root);
    return result;
}

// Postorder Traversal (Left-Right-Node)
function postorderTraversal(root) {
    if (root === null) return [];
    let result = [];
    function dfs(node) {
        if (node) {
            dfs(node.left); // Traverse the left subtree
            dfs(node.right); // Traverse the right subtree
            result.push(node.val); // Visit the root node
        }
    }
    dfs(root);
    return result;
}

// Example Usage
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log("Preorder Traversal:", preorderTraversal(root)); // [1, 2, 3]
console.log("Inorder Traversal:", inorderTraversal(root));   // [1, 3, 2]
console.log("Postorder Traversal:", postorderTraversal(root)); // [3, 2, 1]

// Recursive Depth-First Search (DFS) Traversal Methods are preferred when time complexity is not a concern and code simplicity is desired.
// Iterative Depth-First Search (DFS) Traversal Methods are preferred when time complexity is a concern and code size is large.

// If using recursive, make the function as simple as possible and use it repeatedly;
// In a recursive function, rather than an iterative approach, instead of pushing to a stack then popping it off the stack for analysis, a helper function is called inside itself
// to repeat the logic; the logic between the recursive and iteratvie solutions will be very similar