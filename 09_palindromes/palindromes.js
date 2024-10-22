const palindromes = function(string_val) {
  string_val = string_val.toLowerCase(); // you know what this does
  let reg = /[\w\d]/g; // going to use regular expressions for this exercise
  let arr = string_val.match(reg);
  let arr_rev = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    arr_rev.push(arr[index]);
  }

  // join the array back into a string
  arr_rev = arr_rev.join("");
  arr = arr.join("");

  // print these for debugging purposes
  console.log(arr);
  console.log(arr_rev);
  return arr_rev === arr;

};

console.log(palindromes("Racecar"));

// Do not edit below this line
module.exports = palindromes;
