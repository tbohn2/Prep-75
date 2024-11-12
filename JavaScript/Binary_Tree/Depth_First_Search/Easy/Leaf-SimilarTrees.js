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
// Iterative using stack; Avoids recursion depth limits
var leafSimilar = function (root1, root2) {
    const getLeafValues = (root) => {
        const stack = [root];
        const leaveValues = [];

        while (stack.length > 0) {
            let node = stack.pop();

            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left)
            }
            if (!node.left && !node.right) {
                leaveValues.push(node.val);
            }
        }

        return leaveValues;
    }

    const leaves1 = getLeafValues(root1);
    const leaves2 = getLeafValues(root2);

    return leaves1.length === leaves2.length && leaves1.every((leaf, i) => leaf === leaves2[i]);
};

// Recursive; May lead to a stack overflow for deeply nested trees due to the function call stack
// var leafSimilar = function (root1, root2) {
//     const dfs = root => {
//         if (!root) {
//             return [];
//         }

//         let ans = [...dfs(root.left), ...dfs(root.right)]; // The spread operator is used to merge two arrays; dfs continues until leaves are found
//         // The leaf is added when the left and right children are null
//         if (!ans.length) {
//             ans = [root.val];
//         }

//         return ans;
//     };

//     const l1 = dfs(root1);
//     const l2 = dfs(root2);

//     // return l1.length === l2.length && l1.every((val, idx) => val === l2[idx]); // More efficient with large trees
//     return l1.toString() === l2.toString(); // or join()
// };

console.log(leafSimilar(root1, root2));