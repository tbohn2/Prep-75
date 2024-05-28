// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8). Leaves are the lowest hanging nodes.

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Definiton for binaray tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
root1.right = new TreeNode(1);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);

let root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(7);
root2.right = new TreeNode(1);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(2);
root2.right.right.left = new TreeNode(9);
root2.right.right.right = new TreeNode(8);


// Post order traversal; LRN
// Iterative
var leafSimilar = function (root1, root2) {

    const getLeafValues = (root) => {
        const stack = [root];
        const leafValues = [];

        while (stack.length > 0) {
            const node = stack.pop();
            if (node.left === null && node.right === null) {
                leafValues.push(node.val);
            }

            if (node.right !== null) {
                stack.push(node.right);
            }

            if (node.left !== null) {
                console.log(node.val, node.left.val);
                stack.push(node.left);
            }
        }

        return leafValues;
    };

    const leaves1 = getLeafValues(root1);
    const leaves2 = getLeafValues(root2);

    console.log(leaves1, leaves2);

    // Compare the two leaf values arrays
    if (leaves1.length !== leaves2.length) {
        return false;
    }

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }

    return true;
};

// Recursive
var leafSimilar = function (root1, root2) {
    const dfs = root => {
        if (!root) {
            return [];
        }
        let ans = [...dfs(root.left), ...dfs(root.right)]; // The spread operator is used to merge two arrays; 
        // The leaf is added when the left and right children are null
        if (!ans.length) {
            ans = [root.val];
        }
        return ans;
    };
    const l1 = dfs(root1);
    const l2 = dfs(root2);
    return l1.toString() === l2.toString();
};

console.log(leafSimilar(root1, root2));