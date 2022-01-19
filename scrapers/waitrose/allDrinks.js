const waitroseScrapeBeer = require('./beer');
const waitroseScrapeWine = require('./wine');
const waitroseScrapeSpirits = require('./spirits');

const scrapeWaitrose = async () => {
  try {
    const beer = await waitroseScrapeBeer();
    const wine = await waitroseScrapeWine();
    const spirits = await waitroseScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeWaitrose;
