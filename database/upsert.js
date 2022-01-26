const SupermarketProduct = require('../models/SupermarketProduct');

const upsertIntoDatabase = async (newDrinksArr, supermarketName) => {
  newDrinksArr.forEach(async (item) => {
    try {
      // Patch price and offer if
      // a) Product Name matches
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
      // b) Link text matches
      await SupermarketProduct.query()
        .patch({
          price: item.price,
          offer: item.offer,
          updatedAt: new Date().toISOString(),
        })
        .findOne({
          link: item.link,
          supermarket: item.supermarket,
        });
      // c) Image link text matches
      await SupermarketProduct.query()
        .patch({
          price: item.price,
          offer: item.offer,
          updatedAt: new Date().toISOString(),
        })
        .findOne({
          image: item.image,
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
          (s.productName === item.productName &&
            s.supermarket === item.supermarket) ||
          (s.link === item.link && s.supermarket === item.supermarket) ||
          (s.image === item.image && s.supermarket === item.supermarket)
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
