const executeWithInput = require('../../index')

// Use recursion to write a function that accepts a string and returns the
// first index that contains the character “x.” For example, the string,
// "abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple,
// assume the string definitely has at least one “x.”

const myFunc = (string, index = 0) => {
  if (string[0] === 'x') return index

  return myFunc(string.slice(1, string.length), index + 1)
}

executeWithInput('x9askkk14', myFunc) // 0
executeWithInput('9askkkx14', myFunc) // 6
executeWithInput('9askkk14x', myFunc) // 8
