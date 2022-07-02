const calcAge = (person) => {
  const birth = person.yearOfBirth
  const death = person.yearOfDeath || new Date().getFullYear()

  return death - birth
}

const findTheOldest = (people) =>
  people.reduce((prev, cur) => (calcAge(prev) > calcAge(cur) ? prev : cur))

// Do not edit below this line
module.exports = findTheOldest
