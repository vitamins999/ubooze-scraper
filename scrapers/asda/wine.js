const asdaScraper = require('../utils/asdaScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Wine URLs

// Red
const wineRedPinotNoirURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/pinot-noir/1215685911554-1215345814806-910000975652-1215681528968';
const wineRedMalbecURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/malbec/1215685911554-1215345814806-910000975652-1215681528620';
const wineRedCabernetSauvignonURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/cabernet-sauvignon/1215685911554-1215345814806-910000975652-1215681529358';
const wineRedRiojaURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/rioja/1215685911554-1215345814806-910000975652-1215681748195';
const wineRedShirazURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/shiraz/1215685911554-1215345814806-910000975652-1215681528701';
const wineRedMerlotURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/merlot/1215685911554-1215345814806-910000975652-1215681527474';
const wineRedOtherURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/red-wine/all-other-grapes/1215685911554-1215345814806-910000975652-1215681529165';

// White
const wineWhitePinotGrigioURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/white-wine/pinot-grigio/1215685911554-1215345814806-910000975549-1215681533996';
const wineWhiteSauvignonBlancURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/white-wine/sauvignon-blanc/1215685911554-1215345814806-910000975549-1215681534652';
const wineWhiteChardonnayURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/white-wine/chardonnay/1215685911554-1215345814806-910000975549-1215681534822';
const wineWhiteCheninBlancURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/white-wine/chenin-blanc/1215685911554-1215345814806-910000975549-1215681534985';
const wineWhiteOtherURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/white-wine/all-other-grapes/1215685911554-1215345814806-910000975549-1215681618467';

// Rose
const wineRoseURL1 =
  'https://groceries.asda.com/aisle/beer-wine-spirits/wine/rose-wine/1215685911554-1215345814806-910000975510';
const wineRoseURL2 =
  'https://groceries.asda.com/aisle/beer-wine-spirits/wine/rose-wine/1215685911554-1215345814806-910000975510?page=2';

// Sparkling
const wineSparklingURL =
  'https://groceries.asda.com/aisle/beer-wine-spirits/prosecco-champagne-sparkling-wine/view-all-fizz/2105356077';

// Wine Boxes
const wineBoxesWhiteURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/boxed-wine/boxed-white-wine/2021264892';
const wineBoxesRedURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/boxed-wine/boxed-red-wine/126587530';
const wineBoxesRoseURL =
  'https://groceries.asda.com/shelf/beer-wine-spirits/wine/boxed-wine/boxed-rose-wine/2471649940';

// Fortified wine (Sherry and Port) and Vermouth
const wineFortifiedVermouthURL =
  'https://groceries.asda.com/aisle/beer-wine-spirits/wine/port-sherry-vermouth/124623377';

// Small Bottles
const wineSmallURL =
  'https://groceries.asda.com/aisle/beer-wine-spirits/wine/small-wine-bottles/1452781333';

// Low alcohol
const wineLowAlcoholURL =
  'https://groceries.asda.com/aisle/beer-wine-spirits/wine/no-low-alcohol-wine/925486019';

const asdaScrapeWine = async () => {
  // Red
  const wineRedPinotNoir = await asdaScraper(
    wineRedPinotNoirURL,
    'wine',
    'red'
  );
  const wineRedMalbec = await asdaScraper(wineRedMalbecURL, 'wine', 'red');
  const wineRedCabernetSauvignon = await asdaScraper(
    wineRedCabernetSauvignonURL,
    'wine',
    'red'
  );
  const wineRedRioja = await asdaScraper(wineRedRiojaURL, 'wine', 'red');
  const wineRedShiraz = await asdaScraper(wineRedShirazURL, 'wine', 'red');
  const wineRedMerlot = await asdaScraper(wineRedMerlotURL, 'wine', 'red');
  const wineRedOther = await asdaScraper(wineRedOtherURL, 'wine', 'red');

  const wineRed = [
    ...wineRedPinotNoir,
    ...wineRedMalbec,
    ...wineRedCabernetSauvignon,
    ...wineRedRioja,
    ...wineRedShiraz,
    ...wineRedMerlot,
    ...wineRedOther,
  ];

  // White
  const wineWhitePinotGrigio = await asdaScraper(
    wineWhitePinotGrigioURL,
    'wine',
    'white'
  );

  const wineWhiteSauvignonBlanc = await asdaScraper(
    wineWhiteSauvignonBlancURL,
    'wine',
    'white'
  );

  const wineWhiteChardonnay = await asdaScraper(
    wineWhiteChardonnayURL,
    'wine',
    'white'
  );

  const wineWhiteCheninBlanc = await asdaScraper(
    wineWhiteCheninBlancURL,
    'wine',
    'white'
  );

  const wineWhiteOther = await asdaScraper(wineWhiteOtherURL, 'wine', 'white');

  const wineWhite = [
    ...wineWhitePinotGrigio,
    ...wineWhiteSauvignonBlanc,
    ...wineWhiteChardonnay,
    ...wineWhiteCheninBlanc,
    ...wineWhiteOther,
  ];

  // Rose
  const wineRose1 = await asdaScraper(wineRoseURL1, 'wine', 'rose');
  const wineRose2 = await asdaScraper(wineRoseURL2, 'wine', 'rose');

  const wineRose = [...wineRose1, ...wineRose2];

  // Sparkling
  const wineSparkling = await asdaScraper(
    wineSparklingURL,
    'wine',
    'sparkling'
  );

  // Wine Boxes
  const wineBoxesWhite = await asdaScraper(wineBoxesWhiteURL, 'wine', 'boxes');
  const wineBoxesRed = await asdaScraper(wineBoxesRedURL, 'wine', 'boxes');
  const wineBoxesRose = await asdaScraper(wineBoxesRoseURL, 'wine', 'boxes');

  const wineBoxes = [...wineBoxesWhite, ...wineBoxesRed, ...wineBoxesRose];

  // Fortified & Vermouth
  const wineFortifiedVermouth = await asdaScraper(
    wineFortifiedVermouthURL,
    'wine',
    'fortified'
  );

  // Small Bottles
  const wineSmall = await asdaScraper(wineSmallURL, 'wine', 'small');

  // Low Alcohol
  const wineLowAlcohol = await asdaScraper(
    wineLowAlcoholURL,
    'wine',
    'low alcohol'
  );

  let wine = [
    ...wineRed,
    ...wineWhite,
    ...wineRose,
    ...wineSparkling,
    ...wineBoxes,
    ...wineFortifiedVermouth,
    ...wineSmall,
    ...wineLowAlcohol,
  ];

  wine = removeDuplicates(wine);

  console.log('Wine Scraped!');

  return wine;
};

module.exports = asdaScrapeWine;
