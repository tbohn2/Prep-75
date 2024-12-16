// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// O(m * n) space
// Fill in base cases at top and left edges (1), loop through each square adding top and left squares together for value until end is reached and returned
var uniquePaths = function (m, n) {
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 1; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i < n; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

// O(n) space; makes multi dimensional linear by tracking row by row, rewriting the array
var uniquePaths = function (m, n) {
    const dp = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));