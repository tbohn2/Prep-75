// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Track prev1 and prev2, calculate the total cost to get to each step until the end is reached
var minCostClimbingStairs = function (cost) {
    let n = cost.length;

    let prev2 = 0; // Cost to "start" before step 0
    let prev1 = 0; // Cost to "start" before step 1

    for (let i = 2; i <= n; i++) {
        let current = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([1, 100, 101, 100, 1, 100, 1, 1, 100, 1]));