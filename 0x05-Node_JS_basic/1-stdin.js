// we import `process` module to link with the process and stdin/stdout
const process = require('process');

// display the welcome message
console.log('Welcome to the Holberton School, what is your name?');

// set encoding for STDIN to be 'utf-8'
process.stdin.setEncoding('utf-8');

// then handle data event on STDIN to get user's input
process.stdin.on('data', (input) => {
  // remove trailing whitespaces from input
  const name = input.trim();

  // display the user's input
  console.log(`Your name is: ${name}`);

  // display closing message and exit the process
  console.log('This important software is now closing');
  process.exit();
});

// ensure that the 'end' event also triggers the closing message and exit
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
