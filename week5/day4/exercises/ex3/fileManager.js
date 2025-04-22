const fs = require('fs');

// Function to read content from a file

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      return callback(err, null);
    }
    callback(null, data);
  });
}

// Function to write content to a file
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error("Error writing to file:", err.message);
      return callback(err);
    }
    console.log("File written successfully!");
    callback(null);
  });
}

// Export the functions
module.exports = {
  readFile,
  writeFile,
};
