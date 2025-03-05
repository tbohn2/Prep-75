// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
// Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
// If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// A stack is a data structure that follows the Last In, First Out (LIFO) principle. 
// This means that the last element added (or "pushed") to the stack will be the first one removed (or "popped") from the stack. 

// Using stack
// If the asteroid is positive or the stack is empty, push it; if there is a stack and asteroid is moving left, compare and push or pop accordingly
// Check if there is collision then push asteroid when there is not one 
var asteroidCollision = function (asteroids) {
    const stack = [];

    asteroids.forEach(asteroid => {
        while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const top = stack[stack.length - 1];

            if (top === Math.abs(asteroid)) {
                stack.pop();
                return;
            }
            else if (top < Math.abs(asteroid)) {
                stack.pop();
                continue;
            }
            else {
                return;
            }
        }

        stack.push(asteroid);
    });

    return stack;
};


console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));