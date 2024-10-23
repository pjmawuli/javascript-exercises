const findTheOldest = function(people) {
  let first_person = people[0];
  let people_list = people;

  people_list.forEach(person => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });

  let oldest_person = people_list.reduce((previous, current) => {
    previous_age = previous.yearOfDeath - previous.yearOfBirth;
    current_age = current.yearOfDeath - current.yearOfBirth;

    if (previous_age >= current_age) {
      return previous;
    } else {
      return current;
    }
  }, first_person)

  return oldest_person;


};


// Do not edit below this line
module.exports = findTheOldest;
