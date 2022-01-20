const asdaScrapeBeer = require('./beer');
const asdaScrapeWine = require('./wine');
const asdaScrapeSpirits = require('./spirits');

const scrapeAsda = async () => {
  try {
    const beer = await asdaScrapeBeer();
    const wine = await asdaScrapeWine();
    const spirits = await asdaScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeAsda;
