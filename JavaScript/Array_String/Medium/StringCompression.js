// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
//  Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Pointers to write position and letter position, count characters while the same, once different, write character to chars followed by count if not zero (stringify count and loop)
var compress = function (chars) {
    let write = 0;
    let i = 0;

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === char) {
            i++
            count++
        }

        chars[write] = char;
        write++;

        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    // The `write` pointer now represents the length of the compressed array
    return write;
};


console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));