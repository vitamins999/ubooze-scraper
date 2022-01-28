const Product = require('../models/Product');

const insertAllNewProducts = async (allProducts) => {
  const allProductsInDatabase = await Product.query()
    .select('productID')
    .where('productID', '>', 0);

  const hashTable = {};

  allProductsInDatabase.forEach((product) => {
    hashTable[product.productID] = true;
  });

  const filteredProducts = [];

  allProducts.forEach((product) => {
    const productIDString = product.productID.toString();

    if (!hashTable[productIDString]) {
      filteredProducts.push(product);
    }
  });

  if (filteredProducts.length > 0) {
    await Product.query().insert(filteredProducts);
  }

  console.log('Finished insertion of new products into database.');
};

module.exports = insertAllNewProducts;
