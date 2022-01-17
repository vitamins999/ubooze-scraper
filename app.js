const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile');

const prompt = require('prompt');

const scrapeCoop = require('./scrapers/coop/allDrinks');
const scrapeIceland = require('./scrapers/iceland/allDrinks');

const knex = Knex(knexFile.development);
Model.knex(knex);

console.log('Please select Supermarket from 0-7');
console.log('0 - All Supermarkets');
console.log('1 - ASDA');
console.log('2 - Co-op *Currently not supported*');
console.log('3 - Iceland');
console.log('4 - Morrisons');
console.log('5 - Sainsburys');
console.log('6 - Tesco');
console.log('7 - Waitrose');

prompt.start();

prompt.get('Please select (0-7)', async (err, result) => {
  let answer = result['Please select (0-7)'];

  switch (answer) {
    case '0':
      console.log('All Supermarkets selected');
      break;
    case '1':
      console.log('ASDA selected');
      break;
    case '2':
      console.log(
        'Co-op currently not supported since most recent website update.'
      );
      break;
    case '3':
      console.log('Scraping Iceland...');
      const icelandData = await scrapeIceland();
      console.log(icelandData);
      break;
    case '4':
      console.log('Morrisons selected');
      break;
    case '5':
      console.log('Sainsburys selected');
      break;
    case '6':
      console.log('Tesco selected');
      break;
    case '7':
      console.log('Waitrose selected');
      break;
    default:
      console.log('Valid number not entered.  Please try again.');
  }
});
