const icelandScraper = require('../utils/icelandScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Spirits URLs

// Gin
const spiritsGinURL1 =
  'https://www.iceland.co.uk/drinks/spirits-and-pre-mixed/gin';
const spiritsGinURL2 =
  'https://www.iceland.co.uk/drinks/spirits-and-pre-mixed/gin?start=24';

// Whisky
const spiritsWhiskyURL =
  'https://www.iceland.co.uk/drinks/spirits-and-pre-mixed/whisky';

// Vodka
const spiritsVodkaURL =
  'https://www.iceland.co.uk/drinks/spirits-and-pre-mixed/vodka';

// Liqueurs
const spiritsLiqueurURL1 =
  'https://www.iceland.co.uk/drinks/spirits-and-pre-mixed/liqueurs';
const spiritsLiqueurURL2 =
  'https://www.iceland.co.uk/drinks/spirits-and-pre-mixed/liqueurs?start=24';

const icelandScrapeSpirits = async () => {
  // Gin
  const spiritsGin1 = await icelandScraper(spiritsGinURL1, 'spirits', 'gin');
  const spiritsGin2 = await icelandScraper(spiritsGinURL2, 'spirits', 'gin');

  const spiritsGin = [...spiritsGin1, ...spiritsGin2];

  // Whisky
  const spiritsWhisky = await icelandScraper(
    spiritsWhiskyURL,
    'spirits',
    'whisky'
  );

  // Vodka
  const spiritsVodka = await icelandScraper(
    spiritsVodkaURL,
    'spirits',
    'vodka'
  );

  // Liqueur
  const spiritsLiqueur1 = await icelandScraper(
    spiritsLiqueurURL1,
    'spirits',
    'liqueur'
  );
  const spiritsLiqueur2 = await icelandScraper(
    spiritsLiqueurURL2,
    'spirits',
    'liqueur'
  );

  const spiritsLiqueur = [...spiritsLiqueur1, ...spiritsLiqueur2];

  let spirits = [
    ...spiritsGin,
    ...spiritsWhisky,
    ...spiritsVodka,
    ...spiritsLiqueur,
  ];

  spirits = removeDuplicates(spirits);

  console.log('Spirits scraped!');

  return spirits;
};

module.exports = icelandScrapeSpirits;
