const ftoc = function(temp) {
  let convertedToCelcius = ((temp - 32) * .5556);
  if (convertedToCelcius == 0) return 0;
  return parseFloat(convertedToCelcius.toFixed(1));
};

const ctof = function(temp) {
  let convertedToF = ((temp * 1.8) + 32);
  if (convertedToF == 0) return 0;
  return parseFloat(convertedToF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
