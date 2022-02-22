const SupermarketProduct = require('../models/SupermarketProduct');
const fs = require('fs');

const copyProductsWithNoProductIdToJson = async () => {
  const productsWithNoID = await SupermarketProduct.query()
    .whereNull('productID')
    .orderBy('productName');

  const products = [];
  let highestProductIDCurrentlyInDB = 5091;

  productsWithNoID.forEach((product) => {
    highestProductIDCurrentlyInDB++;

    const productNameArr = product.productName.split(' ');
    const productVolume =
      productNameArr[productNameArr.length - 1].toLowerCase();
    const productName = productNameArr.slice(0, -1).join(' ');

    products.push({
      productID: highestProductIDCurrentlyInDB,
      productName: productName,
      displayName: productName,
      volume: productVolume,
      drinkType: product.drinkType,
      drinkSubtype: product.drinkSubtype,
    });
  });

  const productsWithNoIDJSON = JSON.stringify(products);
  fs.writeFileSync('database/seeds/allProductsNoID.json', productsWithNoIDJSON);
};

module.exports = copyProductsWithNoProductIdToJson;
