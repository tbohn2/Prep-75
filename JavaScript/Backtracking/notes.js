// Backtracking Overview

// Backtracking is a general algorithmic technique used for solving problems recursively 
// by trying to build a solution incrementally and removing the solutions that fail to satisfy constraints.

// Prerequisite:
// 1. The problem must allow exploration of multiple solution paths.
// 2. Constraints and a goal condition must be defined clearly.

// Steps of Backtracking:
// 1. Define a recursive function to explore solution paths.
// 2. Check if the current state satisfies the goal condition. If yes, return or store the solution.
// 3. For each possible choice from the current state:
//    - Make the choice (modify state).
//    - Recur to explore further with the new state.
//    - Undo the choice (backtrack to the previous state).
// 4. Return when all paths have been explored or a solution is found.

// Complexity:
// 1. Time Complexity: Varies based on the problem; it is typically exponential (O(k^n)) for many problems, 
//    where `k` is the number of choices at each step, and `n` is the depth of the search tree.
// 2. Space Complexity: Depends on the recursion depth, typically O(n) due to the call stack.

// Example of Backtracking (Solving the N-Queens Problem):
function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue;

            board[row][col] = 'Q'; // Make the choice
            backtrack(row + 1);    // Recur
            board[row][col] = '.'; // Undo the choice
        }
    }

    backtrack(0);
    return solutions;
}

// Example Usage of Backtracking
const n = 4;
console.log("Solutions for N-Queens:", solveNQueens(n));
// Expected Output:
// Solutions for N-Queens: [
//     [".Q..","...Q","Q...","..Q."],
//     ["..Q.","Q...","...Q",".Q.."]
// ]

// Notes:
// 1. Backtracking is commonly used for problems like:
//    - Generating all permutations or combinations.
//    - Solving puzzles like Sudoku or crosswords.
//    - Exploring paths in graphs (e.g., Hamiltonian paths, Knight's tours).
// 2. It can be optimized with pruning techniques to avoid unnecessary exploration, e.g.,:
//    - Use constraints to eliminate invalid choices early (like the `isValid` function above).
//    - Use memoization or caching to avoid recomputing results for the same state.
// 3. Always consider if backtracking is the most efficient approach or if another algorithm might be better (e.g., dynamic programming, greedy algorithms).
