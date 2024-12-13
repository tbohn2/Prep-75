// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Create backtrack function that checks if sum = n and if numbers.length = k, if greater discard, for loop starting at start value, pushing to numbers array 
// and calling backtrack function again with increased sum, start with 1, [], and sum of 0
var combinationSum3 = function (k, n) {
    const list = [];

    const backtrack = (start, numbers, sum) => {
        if (sum === n && numbers.length === k) {
            list.push([...numbers]);
            return;
        }

        if (sum > n || numbers.length >= k) return;

        for (let nextNumber = start; nextNumber <= 9; nextNumber++) {
            numbers.push(nextNumber);
            backtrack(nextNumber + 1, numbers, sum + nextNumber);
            numbers.pop(); // Backtrack
        }
    }

    backtrack(1, [], 0);

    return list;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));
