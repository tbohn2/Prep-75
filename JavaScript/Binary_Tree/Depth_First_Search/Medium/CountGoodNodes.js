// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Definition for binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(3, new TreeNode(1, new TreeNode(3)), new TreeNode(4, new TreeNode(1), new TreeNode(5)));

const root2 = new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2)))

// Make recursive function as simple as possible
var goodNodes = function (root) {
    let numGoodNodes = 0;

    // Compare current node val and max value
    const dfs = (node, max) => {
        if (!node) { return; }

        if (node.val >= max) { numGoodNodes++ };

        max = Math.max(node.val, max);

        if (node.left) { dfs(node.left, max) };
        if (node.right) { dfs(node.right, max) };
    }

    dfs(root, root.val)

    return numGoodNodes;
};

// Iterative solution
// Compare current node with max value then store lower nodes for later comparison
var goodNodes = function (root) {
    if (root === null) return 0;

    let numGoodNodes = 0;
    const stack = [[root, root.val]]; // Stack to hold pairs of (node, maxVal)

    while (stack.length > 0) {
        const [node, maxVal] = stack.pop();

        // Check if the current node is a good node
        if (node.val >= maxVal) {
            numGoodNodes++;
        }

        // Update maxVal to the maximum value seen so far
        const newMaxVal = Math.max(maxVal, node.val);

        // Push left and right children onto the stack, if they exist
        if (node.right) {
            stack.push([node.right, newMaxVal]);
        }
        if (node.left) {
            stack.push([node.left, newMaxVal]);
        }
    }

    return numGoodNodes;
};

console.log(goodNodes(root1));
console.log(goodNodes(root2));