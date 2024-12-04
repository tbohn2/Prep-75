// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Find the rotten oranges position and number of fresh oranges, do BFS for each rotten orange until all fresh are rotten, adding a minute each round, 
// find Min between the time for each rotten tomato
var orangesRotting = function (grid) {
    const height = grid.length;
    const width = grid[0].length;
    const rottenPos = [];
    let freshOranges = 0;

    grid.forEach((row, i) => {
        row.forEach((column, j) => {
            if (grid[i][j] === 2) {
                rottenPos.push([i, j]);
            };
            if (grid[i][j] === 1) {
                freshOranges++;
            }
        })
    });

    if (freshOranges === 0) { return 0 };

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const queue = [];
    let visited = new Set();
    let turnedToms = 0;

    rottenPos.forEach(rottenTom => {
        let [r, c] = rottenTom;
        queue.push([r, c, 0])
        visited.add(`${r},${c}`)
    })

    while (queue.length) {
        const [r, c, currentMinutes] = queue.shift();

        for (const [dr, dc] of directions) {
            const newR = r + dr;
            const newC = c + dc;

            if (newR < 0 || newC < 0 || newR > height - 1 || newC > width - 1) { continue; }

            if (!visited.has(`${newR},${newC}`)) {
                visited.add(`${newR},${newC}`)

                if (grid[newR][newC] === 1) {
                    turnedToms++;
                    if (turnedToms === freshOranges) {
                        return currentMinutes + 1;
                    } else {
                        queue.push([newR, newC, currentMinutes + 1])
                    }
                }
            }
        }
    }

    return -1;
};

console.log(orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]]));
console.log(orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]]));
console.log(orangesRotting([
    [0, 2]]));
