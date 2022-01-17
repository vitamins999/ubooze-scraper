const icelandScrapeBeer = require('./beer');
const icelandScrapeWine = require('./wine');
const icelandScrapeSpirits = require('./spirits');

const scrapeIceland = async () => {
  try {
    const beer = await icelandScrapeBeer();
    const wine = await icelandScrapeWine();
    const spirits = await icelandScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeIceland;
