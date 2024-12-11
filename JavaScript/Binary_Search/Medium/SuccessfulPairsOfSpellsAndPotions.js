// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] 
// represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

// Sort potions then calculate all products using binary search then add to array
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const goodPairs = [];

    for (const spell of spells) {
        let start = 0;
        let end = potions.length - 1;

        if (spell * potions[potions.length - 1] < success) {
            goodPairs.push(0);
            continue;
        }


        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const product = spell * potions[mid];

            if (product < success) { start = mid + 1 }
            else if (product >= success) { end = mid - 1 }
        }

        goodPairs.push(potions.length - start)

    }

    return goodPairs;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
