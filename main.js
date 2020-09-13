const readline = require('readline');
const getArrayCombinations = require('./getArrayCombinations');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



rl.question(
  'Please enter the array seperated by comma  (1,2,3, ...): ',
  (value) => {
    const arr = value.split(',');
    rl.question(
      'Please enter the number of items for each combination: ',
      (value) => {
        try {
          const n = parseInt(value);
          console.log(getArrayCombinations(arr, n));
        } catch (e) {
          console.log('Please provide a number');
          throw e;
        } finally {
          rl.close();
        }
      }
    );
  }
);
