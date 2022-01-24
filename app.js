require('dotenv').config();

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

const upsertIntoDatabase = require('./database/upsert');

const knex = Knex(knexFile.production);
Model.knex(knex);

const scrapeSupermarketAndUpsert = async (supermarket) => {
  let supermarketData;

  console.log(`Scraping ${supermarket}...`);

  if (supermarket === 'Asda') {
    supermarketData = await scrapeAsda();
  } else if (supermarket === 'Co-op') {
    console.log(
      'Co-op currently not supported since most recent website update.'
    );
  } else if (supermarket === 'Iceland') {
    supermarketData = await scrapeIceland();
  } else if (supermarket === 'Morrisons') {
    supermarketData = await scrapeMorrisons();
  } else if (supermarket === "Sainsbury's") {
    supermarketData = await scrapeSainsburys();
  } else if (supermarket === 'Tesco') {
    supermarketData = await scrapeTesco();
  } else if (supermarket === 'Waitrose') {
    supermarketData = await scrapeWaitrose();
  }

  await upsertIntoDatabase(supermarketData, supermarket);

  console.log(`Successfully scraped ${supermarket}`);
};

console.log('Please select Supermarket from 0-7');
console.log('0 - All Supermarkets');
console.log('1 - Asda');
console.log('2 - Co-op *Currently not supported*');
console.log('3 - Iceland');
console.log('4 - Morrisons');
console.log("5 - Sainsbury's");
console.log('6 - Tesco');
console.log('7 - Waitrose');

prompt.start();

prompt.get('Please select (0-7)', async (err, result) => {
  const answer = result['Please select (0-7)'];

  switch (answer) {
    case '0':
      console.log('All Supermarkets selected');
      await scrapeSupermarketAndUpsert('Asda');
      await scrapeSupermarketAndUpsert('Co-op');
      await scrapeSupermarketAndUpsert('Iceland');
      await scrapeSupermarketAndUpsert('Morrisons');
      await scrapeSupermarketAndUpsert("Sainsbury's");
      await scrapeSupermarketAndUpsert('Tesco');
      await scrapeSupermarketAndUpsert('Waitrose');
      break;
    case '1':
      await scrapeSupermarketAndUpsert('Asda');
      break;
    case '2':
      await scrapeSupermarketAndUpsert('Co-op');
      break;
    case '3':
      await scrapeSupermarketAndUpsert('Iceland');
      break;
    case '4':
      await scrapeSupermarketAndUpsert('Morrisons');
      break;
    case '5':
      await scrapeSupermarketAndUpsert("Sainsbury's");
      break;
    case '6':
      await scrapeSupermarketAndUpsert('Tesco');
      break;
    case '7':
      await scrapeSupermarketAndUpsert('Waitrose');
      break;
    default:
      console.log('Valid number not entered.  Please try again.');
  }
});
