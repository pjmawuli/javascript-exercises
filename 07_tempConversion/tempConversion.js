const convertToCelsius = function(fahrenheit_value) {
  celsius_value = (fahrenheit_value - 32) * (5 / 9);
  celsius_value = Number.parseFloat(celsius_value.toFixed(1));
  return celsius_value;
};

const convertToFahrenheit = function(celsius_value) {
  fahrenheit_value = (celsius_value * (9 / 5)) + 32;
  fahrenheit_value = Number.parseFloat(fahrenheit_value.toFixed(1));
  return fahrenheit_value;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
