const coopScraper = require('../utils/coopScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Beer URL
const beerURL = 'https://shop.coop.co.uk/category/270';

// Cider URL
const ciderURL = 'https://shop.coop.co.uk/category/271';

const coopScrapeBeer = async () => {
  // Beer
  const beerLager = await coopScraper(beerURL, 'beer', '', 10);

  // Cider
  const beerCider = await coopScraper(ciderURL, 'beer', 'cider');

  let beer = [...beerLager, ...beerCider];

  beer = removeDuplicates(beer);

  console.log('Beer Data Scraped!');

  return beer;
};

module.exports = coopScrapeBeer;
