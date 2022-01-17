const icelandScraper = require('../utils/icelandScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Wine URLs

// Red
const wineRedURL1 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/red-wine';
const wineRedURL2 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/red-wine?start=24';
const wineRedURL3 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/red-wine?start=48';
const wineRedURL4 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/red-wine?start=72';

// White
const wineWhiteURL1 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/white-wine';
const wineWhiteURL2 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/white-wine?start=24';
const wineWhiteURL3 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/white-wine?start=48';
const wineWhiteURL4 =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/white-wine?start=72';

// Rose
const wineRoseURL =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/rose-wine';

// Champagne and Sparkling
const wineChampagneSparklingURL =
  'https://www.iceland.co.uk/drinks/wine-and-sparkling/sparkling-wine';

const icelandScrapeWine = async () => {
  // Red
  const wineRed1 = await icelandScraper(wineRedURL1, 'wine', 'red');
  const wineRed2 = await icelandScraper(wineRedURL2, 'wine', 'red');
  const wineRed3 = await icelandScraper(wineRedURL3, 'wine', 'red');
  const wineRed4 = await icelandScraper(wineRedURL4, 'wine', 'red');

  const wineRed = [...wineRed1, ...wineRed2, ...wineRed3, ...wineRed4];

  // White
  const wineWhite1 = await icelandScraper(wineWhiteURL1, 'wine', 'white');
  const wineWhite2 = await icelandScraper(wineWhiteURL2, 'wine', 'white');
  const wineWhite3 = await icelandScraper(wineWhiteURL3, 'wine', 'white');
  const wineWhite4 = await icelandScraper(wineWhiteURL4, 'wine', 'white');

  const wineWhite = [
    ...wineWhite1,
    ...wineWhite2,
    ...wineWhite3,
    ...wineWhite4,
  ];

  // Rose
  const wineRose = await icelandScraper(wineRoseURL, 'wine', 'rose');

  // Champagne & Sparkling
  const wineChampagneSparkling = await icelandScraper(
    wineChampagneSparklingURL,
    'wine',
    'sparkling'
  );

  let wine = [...wineRed, ...wineWhite, ...wineRose, ...wineChampagneSparkling];

  wine = removeDuplicates(wine);

  console.log('Wine scraped!');

  return wine;
};

module.exports = icelandScrapeWine;
