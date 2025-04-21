const chalk = require('/chalk')


function showMessage() {
    console.log(
      chalk.green('✅ Success! ') +
      chalk.blue('This is your ') +
      chalk.yellow.bold('colorful ') +
      chalk.red('message!')
    );
  }
  
  module.exports = showMessage;