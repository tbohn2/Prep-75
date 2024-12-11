// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

let pick = 6;
// let pick = 1;

var guess = function (num) {
    if (num > pick) { return -1 }
    else if (num < pick) { return 1 }
    else return 0
}

// Two pointers at each end, find index between and check if it matches pick, make pointer equal to index one closer to pick accordingly until value is found
var guessNumber = function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        let response = guess(mid);
        if (response === -1) { end = mid - 1 }
        else if (response === 1) { start = mid + 1 }
        else { return mid }
    }

    return null;
};

console.log(guessNumber(10));
// console.log(guessNumber(1));
// console.log(guessNumber(2));
