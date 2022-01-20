const sainsburysScraper = require('../utils/sainsburysScraper');
const removeDuplicates = require('../utils/removeDuplicates');

// Beer URLs

// Lager
const beerLagerURL =
  'https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=278253&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&beginIndex=0&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=12192&top_category=12192&pageSize=120#langId=44&storeId=10151&catalogId=10241&categoryId=278253&parent_category_rn=12192&top_category=12192&pageSize=120&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&searchTerm=&beginIndex=0';

// World Lager
const beerLagerWorldURL =
  'https://www.sainsburys.co.uk/shop/gb/groceries/drinks/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=12260&orderBy=FAVOURITES_FIRST&beginIndex=0&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=12192&top_category=12192&pageSize=120#langId=44&storeId=10151&catalogId=10241&categoryId=12260&parent_category_rn=12192&top_category=12192&pageSize=120&orderBy=FAVOURITES_FIRST&searchTerm=&beginIndex=0';

// Craft and Specialist
const beerCraftURL =
  'https://www.sainsburys.co.uk/shop/gb/groceries/drinks/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=506356&orderBy=FAVOURITES_FIRST&beginIndex=0&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=12192&top_category=12192&pageSize=120#langId=44&storeId=10151&catalogId=10241&categoryId=506356&parent_category_rn=12192&top_category=12192&pageSize=120&orderBy=FAVOURITES_FIRST&searchTerm=&beginIndex=0';

// Cider
const beerCiderURL =
  'https://www.sainsburys.co.uk/shop/gb/groceries/drinks/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=12269&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&beginIndex=0&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=12192&top_category=12192&pageSize=120#langId=44&storeId=10151&catalogId=10241&categoryId=12269&parent_category_rn=12192&top_category=12192&pageSize=120&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&searchTerm=&beginIndex=0&hideFilters=true';

// Ale
const beerAleURL =
  'https://www.sainsburys.co.uk/shop/gb/groceries/drinks/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=506355&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&beginIndex=0&facet=4294952439&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=12192&top_category=12192&pageSize=120#langId=44&storeId=10151&catalogId=10241&categoryId=506355&parent_category_rn=12192&top_category=12192&pageSize=120&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&searchTerm=&beginIndex=0&facet=4294952439';

// Stout
const beerStoutURL =
  'https://www.sainsburys.co.uk/shop/gb/groceries/drinks/ale-stout-#langId=44&storeId=10151&catalogId=10241&categoryId=506355&parent_category_rn=12192&top_category=12192&pageSize=60&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&searchTerm=&beginIndex=0&facet=4294952421';

// Low alcohol
const beerLowAlcoholURL =
  'https://www.sainsburys.co.uk/shop/gb/groceries/drinks/CategoryDisplay?langId=44&storeId=10151&catalogId=10241&categoryId=12267&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&beginIndex=0&promotionId=&listId=&searchTerm=&hasPreviousOrder=&previousOrderId=&categoryFacetId1=&categoryFacetId2=&ImportedProductsCount=&ImportedStoreName=&ImportedSupermarket=&bundleId=&parent_category_rn=12192&top_category=12192&pageSize=120#langId=44&storeId=10151&catalogId=10241&categoryId=12267&parent_category_rn=12192&top_category=12192&pageSize=120&orderBy=FAVOURITES_ONLY%7CSEQUENCING%7CTOP_SELLERS&searchTerm=&beginIndex=0';

const sainsburysScrapeBeer = async () => {
  // Lager
  const beerLagerRegular = await sainsburysScraper(
    beerLagerURL,
    'beer',
    'lager'
  );
  const beerLagerWorld = await sainsburysScraper(
    beerLagerWorldURL,
    'beer',
    'lager'
  );

  const beerLager = [...beerLagerRegular, ...beerLagerWorld];

  // Craft and Specialist
  const beerCraft = await sainsburysScraper(beerCraftURL, 'beer', 'craft');

  // Cider
  const beerCider = await sainsburysScraper(beerCiderURL, 'beer', 'cider');

  // Ale
  const beerAle = await sainsburysScraper(beerAleURL, 'beer', 'ale');

  // Stout
  const beerStout = await sainsburysScraper(beerStoutURL, 'beer', 'stout');

  // Low alcohol
  const beerLowAlcohol = await sainsburysScraper(
    beerLowAlcoholURL,
    'beer',
    'low alcohol'
  );

  let beer = [
    ...beerLager,
    ...beerCraft,
    ...beerCider,
    ...beerAle,
    ...beerStout,
    ...beerLowAlcohol,
  ];

  beer = removeDuplicates(beer);

  console.log('Beer scraped!');
  return beer;
};

module.exports = sainsburysScrapeBeer;
