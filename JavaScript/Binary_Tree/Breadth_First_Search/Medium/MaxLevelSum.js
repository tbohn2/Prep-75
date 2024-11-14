// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(1, new TreeNode(7, new TreeNode(7), new TreeNode(-8)), new TreeNode(0));
const root2 = new TreeNode(989, null, new TreeNode(10250, new TreeNode(98693), new TreeNode(-89388, null, new TreeNode(-32127))));

// Use queue to track each level, loop through each level getting sum and compare to max; record level as minLevel if max is larger
var maxLevelSum = function (root) {
    let level = 0;
    let max = -Infinity;
    let minLevel = 0;
    const queue = [root];

    while (queue.length > 0) {
        const levelLength = queue.length;

        let total = 0;

        level++;
        for (let i = 0; i < levelLength; i++) {
            const node = queue.shift();

            total += node.val;

            if (node.left) { queue.push(node.left) };
            if (node.right) { queue.push(node.right) };
        }

        if (total > max) {
            max = total;
            minLevel = level;
        }
    }

    return minLevel;
};

console.log(maxLevelSum(root1));
console.log(maxLevelSum(root2));
