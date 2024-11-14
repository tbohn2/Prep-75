// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
const root2 = new TreeNode(1, null, new TreeNode(3));
const root3 = new TreeNode(null);

var rightSideView = function (root) {
    if (!root) return [];

    let queue = [root];
    const result = [];

    while (queue.length > 0) {
        const length = queue.length;

        for (i = 0; i < length; i++) {
            const node = queue.shift()

            if (node.left) { queue.push(node.left) };
            if (node.right) { queue.push(node.right) };

            if (i === length - 1) {
                result.push(node.val)
            }
        }
    }

    return result;
};

console.log(rightSideView(root1));
console.log(rightSideView(root2));
console.log(rightSideView(root3));