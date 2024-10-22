const fibonacci = function(count) {
  let fibo = [0, 1]

  if (count === 0 || count === 1)
    return fibo[count]

  else if (count < 0)
      return "OOPS"

  else{
    // loop (count) times
    sum = 1
    for (let i = 1; i <= count; i++){
        fibo[i+1] = fibo[i] + fibo[i - 1]
    }

    return fibo[count]
  }
};


// Do not edit below this line
module.exports = fibonacci;
