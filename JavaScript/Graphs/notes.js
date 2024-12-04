// Graphs Overview

// A graph is a collection of nodes (vertices) connected by edges. It can be:
// 1. Directed: Edges have a direction (A → B).
// 2. Undirected: Edges do not have a direction (A ↔ B).
// 3. Weighted: Edges have a weight (e.g., A → B with weight 5).
// 4. Unweighted: Edges do not have weights.

// Graph Representation:
// 1. Adjacency List: Each node points to a list of its neighbors. 
//    Example: [[1, 2], [0, 2], [0, 1]] for 3 nodes (0, 1, 2).
// 2. Adjacency Matrix: A 2D array where mat[i][j] = 1 if there's an edge from i to j.
//    Example: [
//      [0, 1, 1],
//      [1, 0, 1],
//      [1, 1, 0]
//    ]

// Graph Traversal:
// Traversal refers to visiting all nodes in the graph in a systematic way. Common methods include BFS and DFS.

// Depth-First Search (DFS) Traversal of a Graph
// DFS explores as far as possible along each branch before backtracking.
// It uses a stack (or recursion) to maintain the visited nodes.

function dfsTraversal(graph, start) {
    let stack = [start]; // Use a stack for DFS
    let visited = new Set(); // Keep track of visited nodes
    let result = []; // Store the traversal order

    while (stack.length > 0) {
        let node = stack.pop(); // Pop the top node from the stack

        if (!visited.has(node)) {
            visited.add(node); // Mark the node as visited
            result.push(node); // Add the node to the result

            // Add all unvisited neighbors to the stack
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    return result;
}

// Example Usage
let graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1],
    4: [1, 2],
};

console.log("DFS Traversal:", dfsTraversal(graph, 0));
// Expected Output: [0, 2, 4, 1, 3]

// Depth-First Search (DFS) Traversal is efficient for:
// 1. Finding connected components in a graph.
// 2. Topological sorting of directed acyclic graphs (DAGs).
// 3. Detecting cycles in a graph.
// 4. Solving maze and puzzle problems.

// Notes:
// 1. DFS complexity is O(V + E), where V is the number of vertices and E is the number of edges.
// 2. Recursive DFS is easier to implement but may cause a stack overflow for large graphs.
// 3. Iterative DFS avoids stack overflow by explicitly using a stack.

// Iterative vs. Recursive:
// - Iterative DFS provides better control over memory usage and avoids recursion limits.
// - Recursive DFS is more concise and intuitive but may not handle deep graphs well.
