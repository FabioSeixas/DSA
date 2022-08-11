// Use recursion to write a function that accepts an array of strings and
// returns the total number of characters across all the strings. For example,
// if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there
// are 10 characters in total.

const array1 = ["ab", "c", "def", "ghij"] // 10
const array2 = ["abkasd", "cuiesdl", "def", "ghijinwh"] // 24
const array3 = ["a", "c", "d", "gh"] // 5

const myFunc = (arrayOfStrings) => {
  if (arrayOfStrings.length < 2) return arrayOfStrings[0].length
  return arrayOfStrings[0].length + myFunc(arrayOfStrings.slice(1, arrayOfStrings.length))
}

console.log(myFunc(array1))
console.log(myFunc(array2))
console.log(myFunc(array3))
