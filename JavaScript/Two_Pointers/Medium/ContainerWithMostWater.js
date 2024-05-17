// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// O(n2)
// var maxArea = function (height) {
//     let maximumArea = 1
//     for (let i = 0; i < height.length; i++) {
//         let width = 1
//         for (let x = i; x < height.length; x++) {
//             const lowerHeight = Math.min(height[i], height[i + width])
//             const calculatedArea = lowerHeight * width
//             if (calculatedArea > maximumArea) {
//                 maximumArea = calculatedArea
//             }
//             width++
//         }
//     }
//     return maximumArea;
// };

// O(n1)
// Set x values (left and right) as far as possible and move the smaller height inward because width will only decrease
var maxArea = function (height) {
    let maximumArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right])
        // Width is maximized and can only get smaller
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;

        maximumArea = Math.max(maximumArea, currentArea);

        if (height[left] > height[right]) {
            right--
        }
        else {
            left++
        }
    }
    return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));