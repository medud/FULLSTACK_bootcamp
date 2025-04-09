// Function to make all words uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject("Error: Not all items in the array are strings.");
      }
    });
  }
  
  // Function to sort words if array length is greater than 4
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sorted = words.sort();
        resolve(sorted);
      } else {
        reject("Error: Array length is not greater than 4.");
      }
    });
  }
  
  
  // Test 1 - catch is executed due to a number in the array
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test 2 - catch is executed because array length is not greater than 4
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test 3 - success case
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) 
    .catch(error => console.log(error));
  