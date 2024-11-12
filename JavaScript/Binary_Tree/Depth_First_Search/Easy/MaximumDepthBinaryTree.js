// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = new TreeNode(3, 9, new TreeNode(20, 15, 7))

// Use stack to store the nodes that need to be tested still, LIFO
// Preorder transversal; NLR
var maxDepth = function (root) {
    let max = 0;
    const stack = [[root, 1]];

    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        max = Math.max(max, depth);

        if (node.right) {
            stack.push([node.right, depth + 1]);
        }
        if (node.left) {
            stack.push([node.left, depth + 1]);
        }
    }

    return max;
};

// Recursive solution
// var maxDepth = function (root) {
//     if (root === null) {
//         return 0;
//     }

//     let leftDepth = 0;
//     let rightDepth = 0;

//     if (root.left) {
//         leftDepth = maxDepth(root.left);
//     }
//     if (root.right) {
//         rightDepth = maxDepth(root.right);
//     }

//     return Math.max(leftDepth, rightDepth) + 1;
// };

console.log(maxDepth(root));