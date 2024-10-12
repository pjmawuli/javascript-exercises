const sumAll = function(first, second) {
  // Handling negative numbers
  if ((first < 0) || (second < 0) || !Number.isInteger(first) || !Number.isInteger(second)){
    return "ERROR";
  };

  // Determing the larger number first
  if (first > second) {
    temp1 = first;
    temp2 = second;
    first = temp2;
    second = temp1;
  };

  gen_list = Array.of(first);
  list_len = (second - first);
  sum = 0;

  // Generating the new list
  for (let i = 1; i <= list_len; i++) {
    first += 1;
    gen_list[i] = first;
  }

  // Performing the summation
  while (list_len >= 0) {
    sum += gen_list[list_len];
    list_len -= 1;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
