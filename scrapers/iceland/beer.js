const icelandScraper = require('../utils/icelandScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Beer URLs

// Ale
const beerAleURL1 = 'https://www.iceland.co.uk/drinks/beer-cider-and-ales/ales';
const beerAleURL2 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/ales?start=24';

// Cider
const beerCiderURL1 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/cider';
const beerCiderURL2 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/cider?start=24';
const beerCiderURL3 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/cider?start=48';

// Generic
const beerGenericURL1 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/beer';
const beerGenericURL2 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/beer?start=24';
const beerGenericURL3 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/beer?start=48';
const beerGenericURL4 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/beer?start=72';
const beerGenericURL5 =
  'https://www.iceland.co.uk/drinks/beer-cider-and-ales/beer?start=96';

const icelandScrapeBeer = async () => {
  // Ale
  const beerAle1 = await icelandScraper(beerAleURL1, 'beer', 'ale');
  const beerAle2 = await icelandScraper(beerAleURL2, 'beer', 'ale');

  const beerAle = [...beerAle1, ...beerAle2];

  // Cider
  const beerCider1 = await icelandScraper(beerCiderURL1, 'beer', 'cider');
  const beerCider2 = await icelandScraper(beerCiderURL2, 'beer', 'cider');
  const beerCider3 = await icelandScraper(beerCiderURL3, 'beer', 'cider');

  const beerCider = [...beerCider1, ...beerCider2, ...beerCider3];

  // Generic
  const beerGeneric1 = await icelandScraper(beerGenericURL1, 'beer', '');
  const beerGeneric2 = await icelandScraper(beerGenericURL2, 'beer', '');
  const beerGeneric3 = await icelandScraper(beerGenericURL3, 'beer', '');
  const beerGeneric4 = await icelandScraper(beerGenericURL4, 'beer', '');
  const beerGeneric5 = await icelandScraper(beerGenericURL5, 'beer', '');

  const beerGeneric = [
    ...beerGeneric1,
    ...beerGeneric2,
    ...beerGeneric3,
    ...beerGeneric4,
    ...beerGeneric5,
  ];

  let beer = [...beerAle, ...beerCider, ...beerGeneric];

  beer = removeDuplicates(beer);

  console.log('Beer scraped!');

  return beer;
};

module.exports = icelandScrapeBeer;
