
const inputPrinter = (input) => {
  if (typeof input === 'object') {
    Object.keys(input).forEach(key => {
      console.log(`${key}: ${input[key]}`)
    })
  } else {
    console.log(`For the input: ${input}`)
  }
}

module.exports = (input, func) => {
  inputPrinter(input)
  console.log(`The result is: ${func(input)} \n`)
}
