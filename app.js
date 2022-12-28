/*
QUESTIONS:
1. #2 why is it not returned as an array? is it because of the string method
2. #5 walk through how to break it down why did they not do it via ES2015
*/

// 1. What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
console.log(new Set([1, 1, 2, 2, 3, 4]));
//returns {1,2,3,4} no duplicates allowed

// 2. What does the following code return?

[...new Set("referee")].join("");
console.log([...new Set("referee")].join(""))
// returns ref

// 3. What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m);
/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

/* 4. hasDuplicate

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
*/

const hasDuplicate = arr => new Set(arr).size !== arr.length;
console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));

/* 5. vowelCount

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
*/

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }