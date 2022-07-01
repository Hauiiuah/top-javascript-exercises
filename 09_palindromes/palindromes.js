Array.prototype.equals = function (array) {
  if (!array) return false

  if (this.length != array.length) return false

  let result = true
  this.forEach((l, index) => {
    if (l !== array[index]) {
      result = false
      return
    }
  })

  return result
}

const palindromes = (str) => {
  const letters = str.toLowerCase().match(/[A-Z]/gi)
  const reverse = Array.from(letters)
  reverse.reverse()

  return letters.equals(reverse)
}

// Do not edit below this line
module.exports = palindromes
