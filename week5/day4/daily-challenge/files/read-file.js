// read-file.js
const fs = require('fs');
const path = require('path');

function readFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt'); // Safe relative path
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading file:', err);
    } else {
      console.log('📄 File content:\n' + data);
    }
  });
}

module.exports = readFileContent;
