// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))

// Initiate node as root, while node is not null, compare its value to val then move accordingly or return node if equal;
var searchBST = function (root, val) {
    let node = root;

    while (node) {
        if (node.val === val) {
            return node;
        }

        if (node.val > val) {
            node = node.left;
        } else if (node.val < val) {
            node = node.right;
        }
    }

    return null;
};

console.log(searchBST(root1, 2));
console.log(searchBST(root1, 5));
