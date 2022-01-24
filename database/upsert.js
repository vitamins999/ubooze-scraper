const SupermarketProduct = require('../models/SupermarketProduct');

const upsertIntoDatabase = async (newDrinksArr, supermarketName) => {
  newDrinksArr.forEach(async (item) => {
    try {
      await SupermarketProduct.query()
        .patch({
          price: item.price,
          offer: item.offer,
          updatedAt: new Date().toISOString(),
        })
        .findOne({
          productName: item.productName,
          supermarket: item.supermarket,
        });
    } catch (error) {
      console.log(error);
    }
  });
  const newList = await SupermarketProduct.query()
    .select(
      'productName',
      'price',
      'offer',
      'link',
      'image',
      'drinkType',
      'drinkSubtype',
      'supermarket',
      'productID'
    )
    .where('supermarket', supermarketName);

  const filteredNewSupermarkets = [];

  newDrinksArr.forEach((item) => {
    if (
      !newList.some(
        (s) =>
          s.productName === item.productName &&
          s.supermarket === item.supermarket
      )
    ) {
      filteredNewSupermarkets.push(item);
    }
  });

  if (filteredNewSupermarkets.length > 0) {
    await SupermarketProduct.query().insert(filteredNewSupermarkets);
  }
};

module.exports = upsertIntoDatabase;
