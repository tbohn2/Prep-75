// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Create every sequence for rows and columns then compare them
var equalPairs = function (grid) {
    let columns = new Map();

    // Make columns
    for (i = 0; i < grid.length; i++) {
        const row = grid[i]
        for (x = 0; x < row.length; x++) {
            if (!columns.has(x)) {
                columns.set(x, '');
            }
            const newString = columns.get(x).concat(row[x]);
            columns.set(x, newString)
        }
    }

    // Compare columns and rows
    // Loop inside loop not as efficient
    let numberOfPairs = 0;
    for (row = 0; row < grid.length; row++) {
        const rowValue = grid[row].join('');

        columns.forEach((column) => {
            if (column === rowValue) {
                numberOfPairs++;
            }
        })

    }

    return numberOfPairs;
};

// More efficient to track number of occurrences for each row or column and compare
var equalPairs = function (grid) {
    let columns = new Map();
    let rows = new Map();

    // Make columns and rows with corresponding occurrences
    for (i = 0; i < grid.length; i++) {
        const row = grid[i];
        let colKey = '';
        rows.set(row.join(''), (rows.get(row.join('')) || 0) + 1)

        for (x = 0; x < row.length; x++) {
            const col = grid[x][i];
            colKey = colKey.concat(col)
        }
        columns.set(colKey, (columns.get(colKey) || 0) + 1)
    }

    // Compare columns and rows
    let numberOfPairs = 0;
    for (const [key] of rows) {
        if (columns.has(key) && rows.has(key)) {
            numberOfPairs += columns.get(key) * rows.get(key);
        }
    }

    return numberOfPairs;
};

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]));