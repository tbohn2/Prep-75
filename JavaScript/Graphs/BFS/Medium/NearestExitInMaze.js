// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// If the neighbor is '.' and not at the width or length of graph, add to queue until the edge is found (not including the first)
var nearestExit = function (maze, entrance) {
    const [startX, startY] = entrance;
    const height = maze.length;
    const width = maze[0].length;

    const queue = [[startX, startY, 0]];
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const visited = new Set();
    visited.add(`${startX},${startY}`);

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX < 0 || newY < 0 || newX > height - 1 || newY > width - 1) {
                continue; // proceed to next element in directions array
            }

            if (!visited.has(`${newX},${newY}`)) {
                visited.add(`${newX},${newY}`);

                if (maze[newX][newY] === '.') {
                    if (newX === 0 || newY === 0 || newX === height - 1 || newY === width - 1) {
                        return steps + 1;
                    }
                    queue.push([newX, newY, steps + 1]);
                }
            }
        }

    }

    return -1;
};


console.log(nearestExit([
    ["+", "+", ".", "+"],
    [".", ".", ".", "+"],
    ["+", "+", "+", "."]], [1, 2]));
console.log(nearestExit([
    ["+", "+", "+"],
    [".", ".", "."],
    ["+", "+", "+"]], [1, 0]));
console.log(nearestExit([[".", "+"]], [0, 0]));
