// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia:
// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8)));

// Map to store node value and its parent, initialize the root's parent as null, traverse the tree until we find both nodes `p` and `q`, 
// If left child exists, record its parent and add to stack, If right child exists, record its parent and add to stack, Create a set to store all ancestors of `p`
// Add all ancestors of `p` to the set, Traverse ancestors of `q` until we find the first common one
// Iterative; 
var lowestCommonAncestor = function (root, p, q) {
    const parentMap = new Map();
    const stack = [root];

    parentMap.set(root.val, null);

    while (!parentMap.has(p) || !parentMap.has(q)) {
        const node = stack.pop();

        if (!node) { return null; }

        if (node.left) {
            parentMap.set(node.left.val, node.val);
            stack.push(node.left);
        }

        if (node.right) {
            parentMap.set(node.right.val, node.val);
            stack.push(node.right);
        }
    }

    const ancestors = new Set();

    while (p) {
        ancestors.add(p);
        p = parentMap.get(p); // Gets ancestry back to root parent by parent until null
    }

    while (!ancestors.has(q)) {
        q = parentMap.get(q); // Move up parent by parent of q until the parent exists in the ancestors set
    }

    return q;
};

// Recursive
var lowestCommonAncestor = function (root, p, q) {
    const parents = new Map();
    parents.set(root, null);

    const dfs = (node) => {
        if (node.left) {
            parents.set(node.left.val, node.val);
            dfs(node.left);
        }

        if (node.right) {
            parents.set(node.right.val, node.val);
            dfs(node.right);
        }

    }

    dfs(root)

    if (!parents.has(p) || !parents.has(q)) {
        return null;
    }

    const ancestors = new Set();

    while (p) {
        ancestors.add(p);
        p = parents.get(p);
    }

    while (!ancestors.has(q)) {
        q = parents.get(q);
    }

    return q;
}

console.log(lowestCommonAncestor(root, 5, 1)); // 3
console.log(lowestCommonAncestor(root, 5, 4)); // 5
