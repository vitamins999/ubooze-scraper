const morrisonsScrapeBeer = require('./beer');
const morrisonsScrapeWine = require('./wine');
const morrisonsScrapeSpirits = require('./spirits');

const scrapeMorrisons = async () => {
  try {
    const beer = await morrisonsScrapeBeer();
    const wine = await morrisonsScrapeWine();
    const spirits = await morrisonsScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeMorrisons;
