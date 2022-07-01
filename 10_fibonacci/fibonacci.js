const fibonacci = (num) => {
  if (num < 0) return 'OOPS'
  if (num == 1 || num == 2) return 1
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// Do not edit below this line
module.exports = fibonacci

/*

fib(4) =>
  return fib(3)+fib(2)
  fib(3) =>
    return fib(2)+fib(1)
    fib(2) =>
      return fib(1)+fib(0)
      fib(1) => 1
      fib(0) => 1
    => 2
    fib(1) =>1

*/
