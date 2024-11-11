// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// O(n^2) space and time is most efficient
// Store each row or column as string in Map with its occurences; alternately, store each row in Map, then compare to each column
var equalPairs = function (grid) {
    let entries = new Map();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        let row = [];
        let column = [];
        for (let j = 0; j < grid.length; j++) {
            row.push(grid[i][j]);
            column.push(grid[j][i])
        }

        row = row.join('');
        column = column.join('');

        entries.set(row, (entries.get(row) || 0) + 1)
        entries.set(column, (entries.get(column) || 0) + 1)
    }

    entries.forEach(entry => {
        if (entry > 1) {
            count += entry - 1;
        }
    })

    return count;
};

console.log(equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]]));
console.log(equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2]]));