const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const sum = (arr) => {
  return arr.reduce((prev, curr) => prev + curr, 0)
}

const multiply = (arr) => {
  return arr.reduce((prev, curr) => prev * curr, 1)
}

const power = (num, exp) => {
  return num ** exp
}

const factorial = (f) => {
  return f === 0 ? 1 : f * factorial(f - 1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
