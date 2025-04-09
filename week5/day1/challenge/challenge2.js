const morse = `{
    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", "a": ".-", "b": "-...", "c": "-.-.",
    "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....",
    "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--",
    "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--",
    "x": "-..-", "y": "-.--", "z": "--..", ".": ".-.-.-",
    ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-",
    "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
  }`;
  
  // 1. Convert JSON string to JS object
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Error: Morse object is empty");
      } else {
        resolve(morseObj);
      }
    });
  }
  
  // 2. Ask user for input, convert to morse
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence to convert to Morse code:").toLowerCase();
      const translation = [];
  
      for (let char of userInput) {
        if (morseJS[char]) {
          translation.push(morseJS[char]);
        } else {
          reject(`Error: Character "${char}" is not translatable to Morse code.`);
          return;
        }
      }
  
      resolve(translation);
    });
  }
  
  // 3. Join and show in DOM
  function joinWords(morseTranslation) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = morseTranslation.join("<br>");
  }
  
  // Chaining the functions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `<span style="color:red;">${error}</span>`;
      console.error(error);
    });
  