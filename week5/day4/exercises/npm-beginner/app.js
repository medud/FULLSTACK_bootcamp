import chalk from 'chalk';

console.log(chalk.green('✅ Success!') + ' ' + chalk.blue('You just used ') + chalk.yellow.bold('chalk') + chalk.red('!'));
console.log(chalk.bgMagenta.white(' This is styled with a background! '));
console.log(chalk.underline.cyan('Underlined cyan message'));
