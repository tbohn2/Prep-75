// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c,
// then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Each row is a city; track if visited with array; for first city, add to province count and explore if it is connected to another; 
// if not, move to next city (row) and add another province and repeat search
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    let visited = new Array(n).fill(false); // Track visited cities
    let provinces = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;

            let stack = [i];
            while (stack.length > 0) {
                let city = stack.pop();
                visited[city] = true;

                for (let neighbor = 0; neighbor < n; neighbor++) {
                    if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                        stack.push(neighbor);
                    }
                }
            }

        }
    }

    return provinces;
};

// Recursive
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    let visited = new Array(n).fill(false);
    let provinces = 0;

    const dfs = (city) => {
        if (!visited[city]) {
            visited[city] = true;

            for (let neighbor = 0; neighbor < n; neighbor++) {
                if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
            dfs(i);
        }
    }

    return provinces;
};


console.log(findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]]));
console.log(findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]]));
