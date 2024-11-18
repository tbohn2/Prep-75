// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)));
const root2 = new TreeNode(5, new TreeNode(2, null, new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)));
const root3 = new TreeNode(12, new TreeNode(6, new TreeNode(5), new TreeNode(10, new TreeNode(7, null, new TreeNode(8, null, new TreeNode(9))))), null);

var deleteNode = function (root, key) {
    let parent = null;
    let node = root;

    // Step 1: Find the node to delete
    while (node && node.val !== key) {
        parent = node;
        if (key < node.val) {
            node = node.left;
        } else {
            node = node.right;
        }
    }

    if (node === null) return root; // Node to delete not found

    // For first and second cases
    const replaceNodeInParent = (parent, node, newChild) => {
        if (parent === null) {
            return newChild;
        }
        if (parent.left === node) {
            parent.left = newChild;
        } else {
            parent.right = newChild;
        }
        return root;
    };

    // Case 1: Node has no children (leaf node)
    if (!node.left && !node.right) {
        replaceNodeInParent(parent, node, null)
    }

    // Case 2: Node has one child
    if (!node.left || !node.right) {
        if (node.left) {
            replaceNodeInParent(parent, node, node.left)
        } else {
            replaceNodeInParent(parent, node, node.right)
        }
    }

    // Case 3: Node has two children
    if (node.left && node.right) {
        // Find the inorder successor (smallest node in the right subtree)
        let successor = node.right;
        let successorParent = node;

        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }

        // Replace the node's value with the successor's value
        node.val = successor.val;

        // Delete the successor node
        if (successorParent.left === successor) {
            successorParent.left = successor.right;
        } else {
            successorParent.right = successor.right;
        }
    }

    return root.left.right;
};

// Recursive
var deleteNode = function (root, key) {
    if (root === null) return null;

    // Step 1: Search for the node to delete
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Step 2: Found the node to delete
        // Case 1: Node has no children (leaf node)
        if (root.left === null && root.right === null) {
            return null;
        }

        // Case 2: Node has one child
        if (root.left === null) {
            return root.right; // Return the right child
        } else if (root.right === null) {
            return root.left; // Return the left child
        }


        // Case 3: Node has two children
        function findMin(node) {
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        }

        // Find the inorder successor (the smallest node in the right subtree)
        let successor = findMin(root.right);

        // Replace the value of the node to be deleted with the inorder successor's value
        root.val = successor.val;

        // Delete the inorder successor
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
};

console.log(deleteNode(root1, 3));
console.log(deleteNode(root2, 0));
console.log(deleteNode(root3, 6));
