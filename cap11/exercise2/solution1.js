// Use recursion to write a function that accepts an array of numbers and
// returns a new array containing just the even numbers.

const array1 = [4, 3, 5, 1, 6, 0, 10] // [4, 6, 0, 10]
const array2 = [55, 43, 21, 98, 77, 101, 214] // [98, 214]
const array3 = [46, 92, 24, 16, 80, 68] // [46, 92, 24, 16, 80, 68]

const myFunc = (arrayOfNumbers) => {
  const isEven = arrayOfNumbers[0] % 2 === 0
  const returnArray = isEven ? [arrayOfNumbers[0]] : []
  if (arrayOfNumbers.length < 2) return returnArray
  return [
    ...returnArray,
    ...myFunc(arrayOfNumbers.splice(1, arrayOfNumbers.length))
  ]
}

console.log(myFunc(array1))
console.log(myFunc(array2))
console.log(myFunc(array3))
