// copy-file.js

const fs = require('fs');

// Read from source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }

  // Write to destination.txt
  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Error writing to destination.txt:', err);
    } else {
      console.log('✅ File copied successfully to destination.txt');
    }
  });
});
