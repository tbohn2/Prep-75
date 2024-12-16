// You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.

// Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

// In a tiling, every square must be covered by a tile. 
// Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

// Let dp[i] represent the number of ways to tile a 2 x i board.
// Transitions:
// If the last column is filled with a domino, we use dp[i - 1]. 
// If the last two columns are filled with two horizontal dominoes, we use dp[i - 2]. 
// If the last two columns are filled with a tromino, the configuration count from dp[i - 3] * 2 is added because the dual arrangement of the trominoes.

// All the answers of the previous set (i-1) plus 

var numTilings = function (n) {
    const MOD = 1e9 + 7;

    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + 2 * dp[i - 3]) % MOD;
    }

    return dp[n];
};

// O(1) space
var numTilings = function (n) {
    const MOD = 1e9 + 7;

    if (n === 0) { return 1 }
    if (n === 1) { return 1 }
    if (n === 2) { return 2 }

    let prev3 = 1
    let prev2 = 1
    let prev1 = 2

    for (let i = 3; i <= n; i++) {
        const current = (prev1 + prev2 + 2 * prev3) % MOD;

        prev3 = prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

console.log(numTilings(3));
console.log(numTilings(1));
console.log(numTilings(10));