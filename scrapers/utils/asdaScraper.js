const cheerio = require('cheerio');
const currency = require('currency.js');
const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

const asdaScraper = async (url, drinkType, drinkSubtype) => {
  try {
    const products = [];

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1300, height: 1000 });
    await page.goto(url);
    await page.waitForSelector('.co-product-list');

    // Scroll to very top of page
    await page.evaluate((_) => {
      window.scrollTo(0, 0);
    });

    // Scroll to the bottom of the page with puppeteer autoscroll down
    await scrollPageToBottom(page, 250, 300);

    const html = await page.content();

    const $ = cheerio.load(html);

    const items = $('.co-product-list__main-cntr').first().find('.co-item');

    items.each((i, el) => {
      const productNameText = $(el).find('h3').text().trim();

      const size = $(el).find('.co-product__volume').text().trim();
      const productName = `${productNameText} ${size}`;

      const priceText = $(el).find('.co-product__price').text().trim();
      const price = currency(priceText.slice(1)).intValue;

      let offerElements = $(el).find('.link-save-banner-large__config');

      let offer;

      if (offerElements.length === 0) {
        offer = 'No offer';
      } else if (offerElements.length === 3) {
        offerText1 = offerElements.first().text().trim();
        offerText2 = offerElements.first().next().text().trim();
        offerText3 = offerElements.first().next().next().text().trim();

        offer = `${offerText1} ${offerText2} ${offerText3}`;
      } else {
        offerText1 = offerElements.first().text().trim();
        offerText2 = offerElements.first().next().text().trim();

        offer = `${offerText1} ${offerText2}`;
      }

      let linkPartial = $(el).find('h3').find('a').attr('href');
      linkPartial = String(linkPartial);
      const link = `https://groceries.asda.com${linkPartial}`;

      const imagePartial = $(el).find('img').attr('src');
      let image = String(imagePartial);

      if (!image.includes('https')) {
        image = `https:${image}`;
      }

      products.push({
        productName,
        price,
        offer,
        link,
        image,
        drinkType,
        drinkSubtype,
        supermarket: 'Asda',
      });
    });

    await browser.close();

    return products;
  } catch (error) {
    throw new Error(`*** An error occured with adsaScraper: ${error} ***`);
  }
};

module.exports = asdaScraper;
