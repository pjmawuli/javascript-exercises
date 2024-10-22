const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
  return first - second;
};

const sum = function(list_val) {
  return_sum = 0;
  list_val = list_val.forEach(value => {
    return_sum += value;
  });
  return return_sum;
};

const multiply = function(list_val) {
  return_product = 1;
  list_val = list_val.forEach(value => {
    return_product *= value;
  });

  return return_product;
};

const power = function(first, second) {
  return first ** second;
};

const factorial = function(value) {
  facto = 1;
  while (value > 0) {
    facto *= value;
    value -= 1;
  }
  return facto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
