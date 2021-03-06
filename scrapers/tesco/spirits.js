const tescoScraper = require('../utils/tescoScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Spirits URLS

// Gin
const spiritsGinURL1 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/gin?page=1&count=48';
const spiritsGinURL2 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/gin?page=2&count=48';

// Whisky
const spiritsWhiskyURL1 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/whisky?page=1&count=48';
const spiritsWhiskyURL2 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/whisky?page=2&count=48';
const spiritsWhiskyURL3 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/whisky?page=3&count=48';

// Vodka
const spiritsVodkaURL =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/vodka';

// Rum
const spiritsRumURL1 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/rum';
const spiritsRumURL2 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/rum?page=2';

// Brandy & Cognac
const spiritsBrandyCognacURL =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/brandy-and-cognac';

// Tequila, Liqueurs & Aperitifs
const spiritsTequilaLiqueursURL1 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/tequila-liqueurs-and-aperitifs?page=1&count=48';
const spiritsTequilaLiqueursURL2 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/tequila-liqueurs-and-aperitifs?page=2&count=48';

// Premix
const spiritsPremixURL1 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/ready-to-drink-premixed-spirits-and-cocktails?page=1&count=48';
const spiritsPremixURL2 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/ready-to-drink-premixed-spirits-and-cocktails?page=2&count=48';
const spiritsPremixURL3 =
  'https://www.tesco.com/groceries/en-GB/shop/drinks/spirits/ready-to-drink-premixed-spirits-and-cocktails?page=3&count=48';

const tescoScrapeSpirits = async () => {
  // Gin
  const spiritsGin1 = await tescoScraper(spiritsGinURL1, 'spirits', 'gin');
  const spiritsGin2 = await tescoScraper(spiritsGinURL2, 'spirits', 'gin');

  const spiritsGin = [...spiritsGin1, ...spiritsGin2];

  // Whisky
  const spiritsWhisky1 = await tescoScraper(
    spiritsWhiskyURL1,
    'spirits',
    'whisky'
  );
  const spiritsWhisky2 = await tescoScraper(
    spiritsWhiskyURL2,
    'spirits',
    'whisky'
  );
  const spiritsWhisky3 = await tescoScraper(
    spiritsWhiskyURL3,
    'spirits',
    'whisky'
  );

  const spiritsWhisky = [
    ...spiritsWhisky1,
    ...spiritsWhisky2,
    ...spiritsWhisky3,
  ];

  // Vodka
  const spiritsVodka = await tescoScraper(spiritsVodkaURL, 'spirits', 'vodka');

  // Rum
  const spiritsRum1 = await tescoScraper(spiritsRumURL1, 'spirits', 'rum');
  const spiritsRum2 = await tescoScraper(spiritsRumURL2, 'spirits', 'rum');

  const spiritsRum = [...spiritsRum1, ...spiritsRum2];

  // Brandy & Cognac
  const spiritsBrandyCognac = await tescoScraper(
    spiritsBrandyCognacURL,
    'spirits',
    'brandy and cognac'
  );

  // Tequila, Liqueurs & Aperitifs
  const spiritsTequilaLiqueurs1 = await tescoScraper(
    spiritsTequilaLiqueursURL1,
    'spirits',
    'tequila and liqueurs'
  );
  const spiritsTequilaLiqueurs2 = await tescoScraper(
    spiritsTequilaLiqueursURL2,
    'spirits',
    'tequila and liqueurs'
  );

  const spiritsTequilaLiqueurs = [
    ...spiritsTequilaLiqueurs1,
    ...spiritsTequilaLiqueurs2,
  ];

  // Premix
  const spiritsPremix1 = await tescoScraper(
    spiritsPremixURL1,
    'spirits',
    'premix'
  );
  const spiritsPremix2 = await tescoScraper(
    spiritsPremixURL2,
    'spirits',
    'premix'
  );
  const spiritsPremix3 = await tescoScraper(
    spiritsPremixURL3,
    'spirits',
    'premix'
  );

  const spiritsPremix = [
    ...spiritsPremix1,
    ...spiritsPremix2,
    ...spiritsPremix3,
  ];

  let spirits = [
    ...spiritsGin,
    ...spiritsWhisky,
    ...spiritsVodka,
    ...spiritsRum,
    ...spiritsBrandyCognac,
    ...spiritsTequilaLiqueurs,
    ...spiritsPremix,
  ];

  spirits = removeDuplicates(spirits);

  console.log('Spirits Data Scraped!');

  return spirits;
};

module.exports = tescoScrapeSpirits;
