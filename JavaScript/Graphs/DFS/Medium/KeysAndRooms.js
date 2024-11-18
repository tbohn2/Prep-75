// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. 
// However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, 
// and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

// Time Complexity: O(V+E), where V is the number of rooms and E is the total number of keys across all rooms (nodes and edges of the graph). 
// Space Complexity: O(V), for the visited set and stack

// DFS with stack and set to track visited room numbers
var canVisitAllRooms = function (rooms) {
    let visited = new Set();
    const stack = [0];

    while (stack.length > 0) {
        let roomNumber = stack.pop();

        if (!visited.has(roomNumber)) {
            visited.add(roomNumber)
            let currentRoom = rooms[roomNumber];

            currentRoom.forEach(key => {
                if (!visited.has(key)) {
                    stack.push(key);
                }
            });
        }
    }

    return visited.size === rooms.length;
};

// Recursive
var canVisitAllRooms = function (rooms) {
    let visited = new Set();

    const dfs = (roomNumber) => {
        if (!visited.has(roomNumber)) {
            visited.add(roomNumber);

            rooms[roomNumber].forEach(keyNumber => {
                if (!visited.has(keyNumber)) {
                    dfs(keyNumber);
                }
            })
        }
    }

    dfs(0);

    return visited.size === rooms.length;
}

console.log(canVisitAllRooms([[1], [2], [3], []]));
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
