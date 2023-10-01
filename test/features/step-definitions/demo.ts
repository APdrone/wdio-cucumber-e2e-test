import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from 'chai';

Given(/^Google page is opened$/, async function () {
  await browser.url('https://www.google.com');
  await browser.pause(1000);
  console.log(`After opening browser...`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let ele = await $(`[name='q']`);
  await ele.setValue(searchItem);
  await browser.keys('Enter');
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^The URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * Web Interaction
 */
Given(/^A web page is opened$/, async function () {
  //we can also place the URL on the config file instead of defining it here
  // await browser.url('https://the-internet.herokuapp.com/');
  await browser.url('/inputs');
  // we can have "implicit" wait, pageload time time of 10 secs
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  //maximize the window
  await browser.maximizeWindow();
});

When(/^Perform web interaction$/, async function () {
  /**
   * 1. input box
   *
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just add Value
   * 3. click and type
   * 4. slow typing
   */
  let ele = await $('input[type="number"]');
  //set value will clear the fields= before entering value

  //  1. Type into input box
  // await ele.setValue('12345');

  //2. Clear the field and type or just add Value
  //addValue will not clear the value
  // await ele.addValue('12345');

  //3. click and type
  //some application wont accept setValue, so need to click and then type using setValue
  await ele.click();
  await ele.setValue('12345');

  // 3.1 move to element and type
  // await ele.moveTo();
  // or
  // await ele.scrollIntoView();
  // await ele.setValue('12345');

  // 4 slow typing
  await ele.click();
  let num = 12345;
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    let charStr = strNum.charAt(i);
    await browser.pause(1000);
    await browser.keys(charStr);
  }

  // we can use it to pause the execution
  // await browser.debug();
});
