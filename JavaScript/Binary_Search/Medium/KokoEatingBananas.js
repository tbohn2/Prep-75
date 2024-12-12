// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas,
// she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Binary search, find max of the pile and use it as the right pointer, find the mid and calculate hours to eat all piles, 
// if hours is greater than h, move left pointer to mid + 1, otherwise move right pointer to mid
var minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let hours = 0;

        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
