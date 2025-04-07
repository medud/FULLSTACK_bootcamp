function isAnagram(str1, str2) {
    // Clean both strings: remove spaces and convert to lowercase
    const cleaned1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleaned2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // Sort the characters
    const sorted1 = cleaned1.split('').sort().join('');
    const sorted2 = cleaned2.split('').sort().join('');
  
    // Debug: show the sorted strings
    console.log(sorted1);
    console.log(sorted2);
  
    // Compare the sorted strings
    if (sorted1 === sorted2) {
      console.log(`${str1} is an anagram of ${str2}`);
      return true;
    } else {
      console.log(`${str1} is NOT an anagram of ${str2}`);
      return false;
    }
  }
  
  // Test cases
  console.log(isAnagram("Astronomer", "Moon starer"));         // true
  console.log(isAnagram("School master", "The classroom"));    // true
  console.log(isAnagram("The Morse Code", "Here come dots"));  // true
  console.log(isAnagram("Hello", "World"));                    // false
  