const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile');

const prompt = require('prompt');

const knex = Knex(knexFile.development);
Model.knex(knex);

prompt.start();

prompt.get('Please select (0-6)', (err, result) => {
  let answer = result['Please select (0-6)'];

  switch (answer) {
    case '0':
      console.log('0 selected');
      break;
    case '1':
      console.log('1 selected');
      break;
    case '2':
      console.log('2 selected');
      break;
    case '3':
      console.log('3 selected');
      break;
    case '4':
      console.log('4 selected');
      break;
    case '5':
      console.log('5 selected');
      break;
    case '6':
      console.log('6 selected');
      break;
    default:
      console.log('Valid number not entered.  Please try again.');
  }
});
