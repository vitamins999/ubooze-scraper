const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile');

const prompt = require('prompt');

const scrapeAsda = require('./scrapers/asda/allDrinks');
const scrapeCoop = require('./scrapers/coop/allDrinks');
const scrapeIceland = require('./scrapers/iceland/allDrinks');
const scrapeMorrisons = require('./scrapers/morrisons/allDrinks');
const scrapeSainsburys = require('./scrapers/sainsburys/allDrinks');
const scrapeTesco = require('./scrapers/tesco/allDrinks');
const scrapeWaitrose = require('./scrapers/waitrose/allDrinks');

const knex = Knex(knexFile.development);
Model.knex(knex);

const scrapeSupermarketAndUpsert = async (supermarket) => {
  let supermarketData;

  console.log(`Scraping ${supermarket}...`);

  if (supermarket === 'ASDA') {
    supermarketData = await scrapeAsda();
  } else if (supermarket === 'Co-op') {
    console.log(
      'Co-op currently not supported since most recent website update.'
    );
  } else if (supermarket === 'Iceland') {
    supermarketData = await scrapeIceland();
  } else if (supermarket === 'Morrisons') {
    supermarketData = await scrapeMorrisons();
  } else if (supermarket === 'Sainsburys') {
    supermarketData = await scrapeSainsburys();
  } else if (supermarket === 'Tesco') {
    supermarketData = await scrapeTesco();
  } else if (supermarket === 'Waitrose') {
    supermarketData = await scrapeWaitrose();
  }

  // TODO: change this from logging in console to upserting into DB function
  console.log(supermarketData);

  console.log(`Successfully scraped ${supermarket}`);
};

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
      await scrapeSupermarketAndUpsert('ASDA');
      await scrapeSupermarketAndUpsert('Co-op');
      await scrapeSupermarketAndUpsert('Iceland');
      await scrapeSupermarketAndUpsert('Morrisons');
      await scrapeSupermarketAndUpsert('Sainsburys');
      await scrapeSupermarketAndUpsert('Tesco');
      await scrapeSupermarketAndUpsert('Waitrose');
      break;
    case '1':
      scrapeSupermarketAndUpsert('ASDA');
      break;
    case '2':
      scrapeSupermarketAndUpsert('Co-op');
      break;
    case '3':
      scrapeSupermarketAndUpsert('Iceland');
      break;
    case '4':
      scrapeSupermarketAndUpsert('Morrisons');
      break;
    case '5':
      scrapeSupermarketAndUpsert('Sainsburys');
      break;
    case '6':
      scrapeSupermarketAndUpsert('Tesco');
      break;
    case '7':
      scrapeSupermarketAndUpsert('Waitrose');
      break;
    default:
      console.log('Valid number not entered.  Please try again.');
  }
});
