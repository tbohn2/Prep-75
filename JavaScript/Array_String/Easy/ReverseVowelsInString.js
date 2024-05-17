// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Split string into array, find vowels and track index, reverse array and splice vowels back into array with proper indexes
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelsToReverse = []
    let indexesOfVowels = []
    const array = s.split('')
    let newArray = []

    array.forEach((letter, index) => {
        let isVowel = false;
        vowels.forEach(vowel => {
            if (letter === vowel) {
                isVowel = true;
            }
        })
        if (isVowel) {
            vowelsToReverse.push(letter);
            indexesOfVowels.push(index);
        }
        else {
            newArray.push(letter)
        }
    });

    let reversedVowels = []

    for (let I = vowelsToReverse.length - 1; I >= 0; I--) {
        reversedVowels.push(vowelsToReverse[I])
    }

    reversedVowels.forEach((vowel, index) => {
        newArray.splice(indexesOfVowels[index], 0, vowel)
    })

    const reversedWord = newArray.join('')
    console.log(reversedWord);
    return reversedWord
}

reverseVowels('hello')
reverseVowels('leetcode')