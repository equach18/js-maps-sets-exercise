// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => {
    const newArr = [...new Set (arr)];
    return newArr.length !== arr.length ? true : false;
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = (str) => {
    const vowelsMap = new Map();
    const vowels = 'aeiou';
    let lowerCasedStr = str.toLowerCase()

    for (let letter of lowerCasedStr) {
        if(vowels.includes(letter)){
            if (vowelsMap.has(letter)){
                vowelsMap.set(letter, vowelsMap.get(letter) + 1);
            } 
            else{
                vowelsMap.set(letter, 1);
            }
        }
    }

    return vowelsMap;
}