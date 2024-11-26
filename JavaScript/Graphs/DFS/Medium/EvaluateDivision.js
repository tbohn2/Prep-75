// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

var calcEquation = function (equations, values, queries) {
    let graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [u, v] = equations[i];
        if (!graph.has(u)) { graph.set(u, []) };
        if (!graph.has(v)) { graph.set(v, []) };
        graph.get(u).push([v, values[i]]);
        graph.get(v).push([u, 1 / values[i]]);
    }

    const dfs = (start, end) => {
        if (!graph.has(start) || !graph.has(end)) return -1.0;

        const stack = [[start, 1.0]]; // [current node, cumulative product]
        const visited = new Set();

        while (stack.length > 0) {
            const [node, product] = stack.pop();

            if (node === end) return product;

            visited.add(node);

            for (const [neighbor, value] of graph.get(node)) {
                if (!visited.has(neighbor)) {
                    stack.push([neighbor, product * value]);
                }
            }
        }

        return -1.0; // No path found
    };

    return queries.map(([C, D]) => dfs(C, D));
};

var calcEquation = function (equations, values, queries) {
    let graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [u, v] = equations[i];
        if (!graph.has(u)) { graph.set(u, []) };
        if (!graph.has(v)) { graph.set(v, []) };
        graph.get(u).push([v, values[i]]);
        graph.get(v).push([u, 1 / values[i]]);
    }

    const dfs = (node, target, visited, product) => {
        if (!graph.has(node) || visited.has(node)) return -1.0;

        if (node === target) return product;

        visited.add(node);

        for (const [neighbor, value] of graph.get(node)) {
            const result = dfs(neighbor, target, visited, product * value);
            if (result !== -1.0) return result;
        }

        return -1.0;
    };

    return queries.map(([C, D]) => {
        if (!graph.has(C) || !graph.has(D)) return -1.0;
        if (C === D) return 1.0;
        const visited = new Set();
        return dfs(C, D, visited, 1.0);
    });
};

console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]));
console.log(calcEquation([["a", "b"], ["b", "c"], ["bc", "cd"]], [1.5, 2.5, 5.0], [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]));
