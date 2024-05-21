// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
//  Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
// If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// A stack is a data structure that follows the Last In, First Out (LIFO) principle. 
// This means that the last element added (or "pushed") to the stack will be the first one removed (or "popped") from the stack. 

// Less efficient because splice method is used multiple times; pop is better
var asteroidCollision = function (asteroids) {
    let index = 1;
    while (index < asteroids.length) {
        if (asteroids[index] < 0 && asteroids[index - 1] > 0) {
            console.log(asteroids, index);
            if (Math.abs(asteroids[index]) > Math.abs(asteroids[index - 1])) {
                asteroids.splice(index - 1, 1)
            }
            else if (Math.abs(asteroids[index]) === Math.abs(asteroids[index - 1])) {
                asteroids.splice(index - 1, 2);
            } else {
                asteroids.splice(index, 1);
            }
            index--;
        }
        else {
            index++
        }
    }
    return asteroids;
};

// Using stack
var asteroidCollision = function (asteroids) {
    const stack = [];

    asteroids.forEach((asteroid, index) => {
        // The top needs to be positive because it will not collide to left whether left is positive or negative; if top is negative, add asteroid to stack no matter what
        if (stack.length === 0 || asteroid > 0 || stack[stack.length - 1] < 0) {
            stack.push(asteroid);
        }
        // The top will be positive, asteroid will be negative
        while (stack.length !== 0 && asteroid < 0) {
            const top = stack[stack.length - 1]
            if (Math.abs(asteroid) < top) {
                break; // Move on to the next asteroid
            }
            else if (Math.abs(asteroid) === top) {
                stack.pop();
                break; // Get rid of both
            }
            else if (Math.abs(asteroid) > top) {
                stack.pop();
            }
            else if (top < 0) {
                stack.push(asteroid);
                break;
            }
        }
    })

    return stack;
};


console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));