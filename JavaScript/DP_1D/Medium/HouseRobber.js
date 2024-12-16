// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected 
// and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Track maxmimum at each index, comparing the previous sum and the sum two indices back plus the current number in the nums array, then return the value at the end of the array
var rob = function (nums) {
    if (nums.length === 0) return 0; // No houses
    if (nums.length === 1) return nums[0]; // Only one house

    const dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Fill the dp array
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length - 1];
};

// O(1) space
var rob = function (nums) {
    if (nums.length === 0) { return 0 }
    if (nums.length === 1) { return nums[0] }

    let prev1 = 0;
    let prev2 = 0;

    for (const num of nums) {
        const current = Math.max(num + prev2, prev1);

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};



console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 7, 9, 3, 4, 5])); // 16 
