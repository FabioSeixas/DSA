const executeWithInput = require('../../index')
// The following function accepts an array of numbers and returns the sum,
// as long as a particular number doesn’t bring the sum above 100. If adding 
// a particular number will make the sum higher than 100, that number is ignored.
// However, this function makes unnecessary recursive calls. Fix the code to eliminate the unnecessary recursion:

// def add_until_100(array)
//   return 0 if array.length == 0
//   if array[0] + add_until_100(array[1, array.length - 1]) > 100
//     return add_until_100(array[1, array.length - 1]) 
//   else
//     return array[0] + add_until_100(array[1, array.length - 1]) 
//   end
// end


const add_until_100 = (array) => {
  if (!array.length) return 0
  const restAddition = add_until_100(array.slice(1, array.length))
  if (array[0] + restAddition > 100) return restAddition
  return array[0] + restAddition
}

executeWithInput([1, 2, 3], add_until_100) // 6
