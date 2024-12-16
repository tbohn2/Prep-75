// Dynamic Programming (DP) - 1D Overview

// Dynamic Programming (DP) is a problem-solving approach that breaks a problem into smaller overlapping subproblems,
// solves each subproblem once, and stores the results for future use (memoization or tabulation).

// Prerequisite:
// 1. The problem should exhibit *overlapping subproblems* and *optimal substructure*.
// 2. The solution can often be visualized as building upon previous smaller solutions.

// Key Steps in DP - 1D:
// 1. Define the DP array (`dp[]`) to represent the state at each step. The size of `dp` is usually related to the input size.
// 2. Determine the base case(s), which are the initial values of `dp`.
// 3. Write a recurrence relation to calculate `dp[i]` based on smaller subproblems (`dp[i-1]`, `dp[i-2]`, etc.).
// 4. Iterate over the problem space, filling up the `dp` array using the recurrence relation.
// 5. Return the desired value, usually `dp[n]` or similar.

// Complexity:
// 1. Time Complexity: O(n) — A single loop iterates through the problem space.
// 2. Space Complexity: O(n) — Space required to store the DP array (can be reduced to O(1) in some problems).

// Example Problem: Fibonacci Numbers (n-th Fibonacci number; F(x) = F(x-1) + F(x-2))
// Problem: Find the n-th Fibonacci number using DP.
function fib(n) {
    if (n <= 1) return n;

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1; // Base case: F(1) = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Recurrence relation: F(i) = F(i-1) + F(i-2)
    }

    return dp[n];
}

console.log("10th Fibonacci:", fib(10));
// Expected Output: 10th Fibonacci: 55

// Optimized Fibonacci: Reducing Space Complexity to O(1)
function fibOptimized(n) {
    if (n <= 1) return n;

    let prev1 = 1, prev2 = 0;

    for (let i = 2; i <= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

console.log("10th Fibonacci (optimized):", fibOptimized(10));
// Expected Output: 10th Fibonacci (optimized): 55

// Notes on DP - 1D:
// 1. Applications of DP - 1D include:
//    - Fibonacci numbers
//    - Climbing stairs problems
//    - Minimizing/maximizing cost problems
//    - Counting subsets or partitions
// 2. Optimizing space is common in 1D DP by reducing the `dp` array to a few variables when only a fixed number of previous states are required.
// 3. Problems often provide a recursive solution. Converting it to DP avoids redundant computations.

// Example Problem: Climbing Stairs
// Problem: You can climb 1 or 2 steps at a time. How many distinct ways can you climb `n` stairs?
function climbStairs(n) {
    if (n <= 1) return 1;

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1; // Base case: 1 way to climb 1 stair
    dp[2] = 2; // Base case: 2 ways to climb 2 stairs

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Recurrence relation: ways[i] = ways[i-1] + ways[i-2]
    }

    return dp[n];
}

console.log("Ways to climb 5 stairs:", climbStairs(5));
// Expected Output: Ways to climb 5 stairs: 8

// Optimized Climbing Stairs: Reducing Space Complexity
function climbStairsOptimized(n) {
    if (n <= 1) return 1;

    let prev1 = 2, prev2 = 1;

    for (let i = 3; i <= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

console.log("Ways to climb 5 stairs (optimized):", climbStairsOptimized(5));
// Expected Output: Ways to climb 5 stairs (optimized): 8

// Notes:
// 1. Use `dp[]` arrays when a complete record of states is needed for debugging or reconstruction of the solution.
// 2. Optimize space to O(1) when only a few recent states are needed for the solution.
// 3. Test for edge cases (e.g., `n = 0`, `n = 1`) to ensure the base case logic is correct.
