import people from './data.js';

//  calculate average age
function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / personArray.length;
  console.log(`Average Age: ${average}`);
}

calculateAverageAge(people);
