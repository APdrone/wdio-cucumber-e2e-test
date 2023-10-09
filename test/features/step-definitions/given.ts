import { Given } from '@wdio/cucumber-framework';
// import chai from 'chai';

Given(/^Login to inventory web app$/, async function () {
  /**1. Login to inventory app */
  await browser.url('https://www.saucedemo.com');
  // await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();

  /**2. Login */
  await $('#user-name').setValue('standard_user');
  await $('#password').setValue('secret_sauce');
  await $('#login-button').click();

  //** Login with another */

  // await browser.pause(2000);
  // await browser.reloadSession();
  // await browser.url('https://www.saucedemo.com');
  // await $('#user-name').setValue('problem_user');
  // await $('#password').setValue('secret_sauce');
  // await $('#login-button').click();

  /* using refresh command */
  // try {
  //   await $('#user-nam').setValue('standard_user');
  //   await $('#password').setValue('secret_sauce');
  //   await $('#login-button').click();
  // } catch (err) {
  //   console.log(`Error in first login. Retrying`);
  //   await browser.refresh();
  //   await browser.pause(2000);
  //   await $('#user-name').setValue('standard_user');
  //   await $('#password').setValue('secret_sauce');
  //   await $('#login-button').click();
  // }

  /*  using forward/backward  */
  // await browser.back();
  // await browser.pause(2000);
  // await browser.forward();

  //debug
  await browser.debug();
});
