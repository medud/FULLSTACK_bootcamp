const { readFile, writeFile } = require('./fileManager');

const inputFile = __dirname+ '/Hello World.txt';
const outputFile =__dirname+ '/Bye World.txt';

// Read from Hello World.txt
readFile(inputFile, (err, data) => {
  if (err) return;

  console.log("Read from file:", data);

  // Write new content to Bye World.txt
  const newContent = "Writing to the file";
  writeFile(outputFile, newContent, (err) => {
    if (!err) {
      console.log("Successfully wrote to", outputFile);
    }
  });
});

console.log(inputFile);
