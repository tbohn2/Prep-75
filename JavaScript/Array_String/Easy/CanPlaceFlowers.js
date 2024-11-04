// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// O(n) time; O(1) space
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    const length = flowerbed.length

    for (let i = 0; i < length; i++) {
        // Conditions: empty flowerbed, beginning or previous is empty, end or next is empty
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }

        if (count >= n) {
            return true; // Exits the canPlaceFlowers function immediately
        }
    }

    return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));