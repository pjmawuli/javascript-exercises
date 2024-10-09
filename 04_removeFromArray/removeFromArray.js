function removeFromArray(list, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    list = list.filter(num => num !== rest[i]);
  };
  return list;
};



// Do not edit below this line
module.exports = removeFromArray;
