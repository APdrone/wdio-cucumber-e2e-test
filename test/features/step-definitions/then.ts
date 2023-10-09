import { Then } from '@wdio/cucumber-framework';
import chai from 'chai';

Then(/^Inventory page should list (.*)$/, async function (noOfProducts) {
  if (!noOfProducts) throw Error(`Invalid number provided: ${noOfProducts}`);

  let eleArr = await $$('.inventory_item');
  chai.expect(eleArr.length).to.equal(parseInt(noOfProducts));
});

Then(/^Validate all products have valid price$/, async function () {
  /**1. get price list */
  const eleArr = await $$('.inventory_item_price');
  const priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    const priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(`>>> price with $:${priceStrArr}`);

  /**convert string to number */
  let priceNumArr = priceStrArr.map((ele) => +ele.replace('$', ''));

  console.log(`>>> price in numbers:${priceNumArr}`);

  /**Assert if any value is <=0 */
  let invalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);
});
