// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function (flowerbed, n) {
    let roomForMore = true
    let newFlowerBed = flowerbed

    for (let i = 0; i < n; i++) {
        let added = false
        for (x = 0; x < flowerbed.length; x++) {
            if (flowerbed[x - 1] === 0 && flowerbed[x] === 0 && flowerbed[x + 1] === 0) { newFlowerBed[x] = 1; added = true; }
        }
        if (added === false) { roomForMore = false }
    }
    return roomForMore;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));