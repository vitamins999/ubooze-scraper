const sainsburysScrapeBeer = require('./beer');
const sainsburysScrapeWine = require('./wine');
const sainsburysScrapeSpirits = require('./spirits');

const scrapeSainsburys = async () => {
  try {
    const beer = await sainsburysScrapeBeer();
    const wine = await sainsburysScrapeWine();
    const spirits = await sainsburysScrapeSpirits();

    const newDrinksData = [...beer, ...wine, ...spirits];

    return newDrinksData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeSainsburys;
