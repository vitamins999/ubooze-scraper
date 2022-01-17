const coopScrapeBeer = require('./beer');
const coopScrapeWine = require('./wine');
const coopScrapeSpirits = require('./spirits');

const scrapeCoop = async () => {
  try {
    const beer = await coopScrapeBeer();
    const wine = await coopScrapeWine();
    const spirits = await coopScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeCoop;
