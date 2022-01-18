const tescoScrapeBeer = require('./beer');
const tescoScrapeWine = require('./wine');
const tescoScrapeSpirits = require('./spirits');

const scrapeTesco = async () => {
  try {
    const beer = await tescoScrapeBeer();
    const wine = await tescoScrapeWine();
    const spirits = await tescoScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeTesco;
