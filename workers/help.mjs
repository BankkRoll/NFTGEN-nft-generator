import chalk from 'chalk';

export function printHelp() {
    console.log(chalk.reset('┌────────────────────────────┐'));
    console.log(chalk.reset(`│ ${chalk.bold.blue('Usage: npm run <command>')}`.padEnd(48) + '│'));
    console.log(chalk.reset('└────────────────────────────┘'));

  console.log(chalk.reset('┌──────────────────────┬───────────────────────────────┐'));
  console.log(chalk.reset(`│ ${chalk.green('Command').padEnd(30)} │ ${chalk.bold.blue('Description').padEnd(48)} │`));
  console.log(chalk.reset('├──────────────────────┼───────────────────────────────┤'));
  console.log(chalk.reset(`│ ${chalk.green('start').padEnd(30)} │ ${chalk.bold.blue('Start the script').padEnd(48)} │`));
  console.log(chalk.reset(`│ ${chalk.green('collection-info').padEnd(30)} │ ${chalk.bold.blue('Print collection information').padEnd(48)} │`));
  console.log(chalk.reset(`│ ${chalk.green('help').padEnd(30)} │ ${chalk.bold.blue('Prints this screen').padEnd(48)} │`));
  console.log(chalk.reset('└──────────────────────┴───────────────────────────────┘'));

  console.log(chalk.reset('┌──────────────────────────────────────────────────────────────────────────────────────────┐'));
  console.log('│' + chalk.bold.blue(' Usage:').padEnd(109) + '│');
  console.log('│ 1. Generate your NFTs by running the command ' + chalk.bold('"npm start"') + ' in your terminal.'.padEnd(33) + '│');
  console.log('│ 2. Choose whether to generate GIFs or Images when prompted:'.padEnd(91) + '│');
  console.log('│    ' + chalk.green('>') + ' GIFs'.padEnd(85) + '│');
  console.log('│    ' + chalk.green('>') + ' Images'.padEnd(85) + '│');
  console.log('│ 3. This will generate the specified number of NFTs and save them to the output folder.'.padEnd(91) + '│');
  console.log('│ 4. Choose whether to upload the files to IPFS or keep them on your files local:'.padEnd(91) + '│');
  console.log('│    ' + chalk.green('>') + ' Yes: Upload the files to IPFS using thirdweb Storage.'.padEnd(85) + '│');
  console.log('│    ' + chalk.green('>') + ' No: Keep the files on your local machine.'.padEnd(85) + '│');
  console.log(chalk.reset('└──────────────────────────────────────────────────────────────────────────────────────────┘'));
}



