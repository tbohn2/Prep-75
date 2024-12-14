// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let prev1 = 1;
    let prev2 = 1;
    let prev3 = 0;

    for (let i = 3; i <= n; i++) {
        const newVal = prev1 + prev2 + prev3;
        prev3 = prev2;
        prev2 = prev1;
        prev1 = newVal
    }

    return prev1;
};

console.log(tribonacci(4));
console.log(tribonacci(25));
