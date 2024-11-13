// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Definition for binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(10, new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), new TreeNode(2, null, new TreeNode(1))), new TreeNode(-3, null, new TreeNode(11)))
const root2 = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null), new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))))


// Instead of looping through sums to check if the current sum - every prefix sum = targetSum, check if currentSum - target sum is in sumsOfPrev Map
// for (let [prefixSum, occurrences] of sumsOfPrev) {
//     if (currentSum - prefixSum === targetSum) {
//         count += occurrences;
//     }
// }

// Iterative; DFS on tree with stack, tracking sum of previous numbers at each node and the sum from the root to the node; Find new sum at each node and see if this sum minus
// the target equals any number in the prefixSums Map then increase count 1; update prefix sums for left and right nodes, then subtract one from the prefix sum to not recount
// prefix sums that have already been counted
// Stack entries have [node, cumulativeSum, prefixSums]
var pathSum = function (root, targetSum) {
    if (!root) return 0;

    let count = 0;
    const stack = [[root, 0, new Map([[0, 1]])]]; // Each entry is [node, cumulativeSum, prefixSums]; [0,1] because if the sum starts at the root, nothing will be subtracted from current sum to get target sum

    while (stack.length > 0) {
        let [node, sumFromRoot, prefixSums] = stack.pop();

        const currentSum = node.val + sumFromRoot;

        if (prefixSums.has(currentSum - targetSum)) {
            count += prefixSums.get(currentSum - targetSum);
        }

        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);

        if (node.right) stack.push([node.right, currentSum, new Map(prefixSums)]);
        if (node.left) stack.push([node.left, currentSum, new Map(prefixSums)]);

        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1); // Ensures that subsequent paths, which may revisit the same cumulative sum, don’t count previous occurrences from other paths
    }

    return count;
};

// Recursive
var pathSum = function (root, targetSum) {
    if (!root) return 0;

    let count = 0;

    const dfs = (node, cumulativeSum, prefixSums) => {
        const currentSum = node.val + cumulativeSum;

        if (prefixSums.has(currentSum - targetSum)) {
            count += prefixSums.get(currentSum - targetSum);
        }

        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);

        if (node.right) { dfs(node.right, currentSum, new Map(prefixSums)) }
        if (node.left) { dfs(node.left, currentSum, new Map(prefixSums)) }

        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1);
    }

    dfs(root, 0, new Map([[0, 1]]));

    return count;
};

console.log(pathSum(root1, 8));
console.log(pathSum(root2, 22));