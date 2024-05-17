// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies,
//  denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.

// Find max, compare each total to it and add true to result array if total is max
var kidsWithCandies = function (candies, extraCandies) {
    const result = []
    const max = Math.max.apply(null, candies);
    candies.forEach(candy => {
        let isGreatestTotal = false;
        const total = candy + extraCandies
        if (total >= max) { isGreatestTotal = true }
        result.push(isGreatestTotal)
    })
    return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));