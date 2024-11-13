// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(1, null, new TreeNode(1, new TreeNode(1), new TreeNode(1, new TreeNode(1, null, new TreeNode(1, null, new TreeNode(1, null, new TreeNode(1)))), new TreeNode(1))))
const root2 = new TreeNode(1, new TreeNode(1, null, new TreeNode(1, new TreeNode(1, null, new TreeNode(1)), new TreeNode(1))), new TreeNode(1))

//Iterative; Stack of node, current length, and the direction to go, analyze each then add or restart count accordingly
var longestZigZag = function (root) {
    let stack = [[root, 0, null]] // [node, currentLength, direction]
    let maxLength = 0;

    while (stack.length > 0) {
        const [node, length, directionToGo] = stack.pop();

        maxLength = Math.max(length, maxLength);

        if (node.left) {
            let newLength = directionToGo === 'l' ? length + 1 : 1;
            stack.push([node.left, newLength, 'r']);
        }
        if (node.right) {
            let newLength = directionToGo === 'r' ? length + 1 : 1;
            stack.push([node.right, newLength, 'l'])
        }
    }

    return maxLength;
};

var longestZigZag = function (root) {
    let maxLength = 0;

    const dfs = (node, length, directionToGo) => {
        maxLength = Math.max(maxLength, length)

        if (node.left) {
            let newLength = directionToGo === 'l' ? length + 1 : 1;
            dfs(node.left, newLength, 'r')
        }

        if (node.right) {
            let newLength = directionToGo === 'r' ? length + 1 : 1;
            dfs(node.right, newLength, 'l')
        }
    }

    dfs(root, 0, null);

    return maxLength;
}


console.log(longestZigZag(root1));
console.log(longestZigZag(root2));