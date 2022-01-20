const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile');

const prompt = require('prompt');

const scrapeCoop = require('./scrapers/coop/allDrinks');
const scrapeIceland = require('./scrapers/iceland/allDrinks');
const scrapeMorrisons = require('./scrapers/morrisons/allDrinks');
const scrapeSainsburys = require('./scrapers/sainsburys/allDrinks');
const scrapeTesco = require('./scrapers/tesco/allDrinks');
const scrapeWaitrose = require('./scrapers/waitrose/allDrinks');

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
  const answer = result['Please select (0-7)'];

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
      console.log('Scraping Morrisons...');
      const morrisonsData = await scrapeMorrisons();
      console.log(morrisonsData);
      break;
    case '5':
      console.log('Scraping Sainsburys...');
      const sainsburysData = await scrapeSainsburys();
      console.log(sainsburysData);
      break;
    case '6':
      console.log('Scraping Tesco...');
      const tescoData = await scrapeTesco();
      console.log(tescoData);
      break;
    case '7':
      console.log('Scraping Waitrose...');
      const waitroseData = await scrapeWaitrose();
      console.log(waitroseData);
      break;
    default:
      console.log('Valid number not entered.  Please try again.');
  }
});
