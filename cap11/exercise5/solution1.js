const executeWithInput = require('../../index')

// This problem is known as the “Unique Paths” problem: Let’s say you have
// a grid of rows and columns. Write a function that accepts a number of rows
// and a number of columns, and calculates the number of possible “shortest”
// paths from the upper-leftmost square to the lower-rightmost square

// Spent almost 1 hour on this one. I got closer. Gave up and this is the book solution.

const myFunc = ({ rows, columns }) => {

  if (rows === 1 || columns === 1) return 1

  return myFunc({ rows: rows - 1, columns }) + myFunc({ rows, columns: columns - 1 })
}

executeWithInput({ rows: 3, columns: 4 }, myFunc) // 10
executeWithInput({ rows: 3, columns: 3 }, myFunc) // 6
executeWithInput({ rows: 2, columns: 4 }, myFunc) // 4
executeWithInput({ rows: 3, columns: 2 }, myFunc) // 3



