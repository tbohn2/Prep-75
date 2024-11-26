// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network forms a tree).
// Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder.

// Build the adjacency list (Map of city, [array of neighbor, forward edge bool]), initialize visited city set and stack; go from 0 and explore neighbors, counting forward edges
var minReorder = function (n, connections) {
    const graph = new Map();
    for (let [u, v] of connections) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push([v, true]); // Forward edge
        graph.get(v).push([u, false]); // Reverse edge
    }

    const stack = [0];
    const visited = new Set();
    let reversedRoads = 0;

    while (stack.length > 0) {
        const city = stack.pop();

        if (visited.has(city)) continue;
        visited.add(city);

        for (let [neighbor, isForward] of graph.get(city)) {
            if (!visited.has(neighbor)) {
                if (isForward) reversedRoads++;
                stack.push(neighbor);
            }
        }
    }

    return reversedRoads;
};

// Recursive
var minReorder = function (n, connections) {
    const graph = new Map();

    for (let [u, v] of connections) {
        if (!graph.has(u)) { graph.set(u, []) };
        if (!graph.has(v)) { graph.set(v, []) };
        graph.get(u).push([v, true]);
        graph.get(v).push([u, false]);
    }

    let visited = new Set();
    let reversedRoads = 0;

    const dfs = (city) => {
        if (visited.has(city)) { return };
        visited.add(city);

        for (let [neighbor, forwardEdge] of graph.get(city)) {
            if (!visited.has(neighbor)) {
                if (forwardEdge) { reversedRoads++ };
                dfs(neighbor);
            }
        }
    }

    dfs(0);

    return reversedRoads;
}


console.log(minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5]]));
console.log(minReorder(5, [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4]]));
console.log(minReorder(3, [
    [1, 0],
    [2, 0]]));
