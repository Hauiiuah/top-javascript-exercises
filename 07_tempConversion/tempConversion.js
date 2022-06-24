const roundTo=(num) => {
  const FACTOR = 10
  return Math.round(num*FACTOR)/FACTOR
}

const ftoc = (fahrenheit) => {
  const celsius =(fahrenheit -32) *5/9
  return roundTo(celsius)
};

const ctof = (celsius)=>{
  const fahrenheit = celsius * 9 /5 + 32
  return roundTo(fahrenheit)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};



// f = c * 9/5 + 32
// c= (f - 32) * 5/9