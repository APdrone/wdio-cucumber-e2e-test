import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from 'chai';

Given(/^Google page is opened$/, async function () {
  await browser.url('https://www.google.com');
  await browser.pause(1000);
  console.log(`After opening browser...`);
  // console.log(`>>>BrowserObj: ${JSON.stringify(browser)}`);
  // console.log(`>>>BrowserObj: ${JSON.stringify(browser.options)}`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let ele = await $(`[name='q']`);
  await ele.setValue(searchItem);
  await browser.keys('Enter');
  // console.log(`>>>Ele obj: ${JSON.stringify(ele.options)}`);
  // console.log(`>>>Ele obj: ${JSON.stringify(ele.options)}`);
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^The URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL: ${expectedURL}`);
  await browser.waitUntil(
    async function () {
      return (
        (await browser.getTitle()) ===
        'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'
      );
    },
    {
      timeout: 20000,
      interval: 500,
      timeoutMsg: `Failed Loading WDIO webpages ${await browser.getTitle()}`,
    }
  );
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * Web Interaction
 */
Given(/^A web page is opened$/, async function () {
  //we can also place the URL on the config file instead of defining it here
  // await browser.url('https://the-internet.herokuapp.com/');

  //for inputbox
  // await browser.url('/inputs');

  //for dropdowns
  // await browser.url('/dropdown');

  //for checkboxes
  // await browser.url('/checkboxes');

  //for window handling
  // await browser.url('/windows');

  //for alerts
  // await browser.url('/javascript_alerts');

  //for basic auth, we will set username and password in the base url in config file (https://admin:admin@the-internet.herokuapp.com/basic_auth)
  // await browser.url('');

  // for basic auth, we will set username and password in the base url in config file (https://admin:admin@the-internet.herokuapp.com/basic_auth)
  // await browser.url('/upload');

  // for frames
  await browser.url('/frames');

  // for tables
  await browser.url('/tables');

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
  // let ele = await $('input[type="number"]');
  //set value will clear the fields= before entering value
  //  1. Type into input box
  // await ele.setValue('12345');
  //2. Clear the field and type or just add Value
  //addValue will not clear the value
  // await ele.addValue('12345');
  //3. click and type
  //some application wont accept setValue, so need to click and then type using setValue
  // await ele.click();
  // await ele.setValue('12345');
  // 3.1 move to element and type
  // await ele.moveTo();
  // or
  // await ele.scrollIntoView();
  // await ele.setValue('12345');
  // 4 slow typing
  // await ele.click();
  // let num = 12345;
  // let strNum = num.toString();
  // for (let i = 0; i < strNum.length; i++) {
  //   let charStr = strNum.charAt(i);
  //   await browser.pause(1000);
  //   await browser.keys(charStr);
  /**
   * 2. Dropdown
   *
   * Actions
   * 1. Assert default option is selected
   * 2. select by attribute, text, index
   * 3. Get list of options
   */
  //1. Assert default option is selected
  // let ele = await $('//select/option[@selected="selected"]');
  // let val = await ele.getText();
  // chai.expect(val).to.equal('Please select an option');
  //2. select by attribute, text, index
  // let dropdownEle = $('#dropdown');
  // //we can also select by index and attribute
  // await dropdownEle.selectByVisibleText('Option 2');
  // await dropdownEle.selectByAttribute('value', '1');
  // await dropdownEle.selectByIndex(2);
  // //3. Get list of options
  // let eleArr = await $$('select > option');
  // let arr = [];
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   let val = await ele.getText();
  //   arr.push(val);
  // }
  // console.log(`>>> Options Array : ${arr}`);
  // we can use it to pause the execution
  /**
   * 3. Checkbox
   *
   * Actions:
   * 1. select an option
   * 2. unselect an option(if needed)
   * 3. Assert if option is selected
   * 4. Select all options
   */
  //1. select an option
  // let ele = await $('//*[@id="checkboxes"]/input[1]');
  // ele.click();
  //2. unselect an option(if needed)
  // let secondele = await $('//*[@id="checkboxes"]/input[2]');
  // // secondele.click();
  // if (!(await secondele.isSelected())) {
  //   secondele.click();
  // }
  //3. Assert if option is selected
  // let ele = await $('//*[@id="checkboxes"]/input[2]');
  // const isChecked = await ele.isSelected();
  // chai.expect(isChecked).to.be.true;
  // 4. Select all options
  // let eleArr = await $$('//*[@id="checkboxes"]/input');
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   if (!(await ele.isSelected())) {
  //     ele.click();
  //   }
  // }
  /**
   * 4. windows Handling
   *
   */
  //1. opening two windows using link and partial link text selector
  // await $(`=Click Here`).click();
  // await $(`*=Elemental`).click();
  //get current window title
  // let currentWinTitle = await browser.getTitle();
  // let parentWinHandle = await browser.getWindowHandle();
  // console.log(`>>> currentWinTitle: ${currentWinTitle}`);
  //Switch to specific window
  // let winHandles = await browser.getWindowHandles();
  // for (let i = 0; i < winHandles.length; i++) {
  //   console.log(`>>> Win Handle: ${winHandles[i]}`);
  //   await browser.switchToWindow(winHandles[i]);
  //   currentWinTitle = await browser.getTitle();
  //   if (currentWinTitle.includes('Elemental Selenium | Elemental Selenium')) {
  //     await browser.switchToWindow(winHandles[i]);
  //     let headerTxt = await $(`<h1>`).getText();
  //     console.log(`>>> headerTxtString: ${headerTxt}`);
  //     //rest of the action
  //     break;
  //   }
  // }
  //switch to parent window
  // await browser.switchToWindow(parentWinHandle);
  // let parentWinTxt = await $(`<h3>`).getText();
  // console.log(`>>> parentWinTxt: ${parentWinTxt}`);
  /**
   * 5. Handle alerts
   *
   * Alert, confim, prompt, browser auth,
   */
  // to open alert
  // await $(`button=Click for JS Alert`).click();
  // to open prompt
  // await $(`button=Click for JS Prompt`).click();
  //to verify alert is open
  // if (await browser.isAlertOpen()) {
  //to accept alert
  // await browser.acceptAlert();
  //to dimiss alert
  // await browser.dismissAlert();
  //to read alert txt and send text to alert
  // let alertTxt = await browser.getAlertText();
  // console.log(`>>> alertText: ${alertTxt}`);
  // await browser.sendAlertText(`Hello JS Prompt...`);
  // await browser.acceptAlert();
  // }
  // to handle basic auth(/basic_auth) , we will send creds in url (set in config.js) and then assert text
  // let BasicAuthTxt = await $(`<h3>`).getText();
  // console.log(`>>> Basic Auth: ${BasicAuthTxt}`);
  /**
   * 6. File upload
   */
  //earlier we used "setValue" and "addValue", here we dont have to clear any input so we can go with "addValue"
  // await $(`#file-upload`).addValue(
  //   `${process.cwd()}/data/fileUpload/dummy.txt`
  // );
  // await $('#file-submit').click();

  /**
   * 8. Frames
   *
   */
  //open iframe page
  // await $(`=iFrame`).click();

  // //switch to iframe
  // let ele = await $('#mce_0_ifr');
  // await browser.switchToFrame(ele);

  // //interaction with iframe
  // await $('#tinymce').setValue(`Typing into a frame`);

  // //switch back to iframe
  // await browser.switchToParentFrame();

  /**
   * 9. KEY PRESSES:
   * to simulate keyboard actions
   *
   * using the same iframe url
   */

  //open iframe page
  // await $(`=iFrame`).click();

  //switch to iframe
  // let ele = await $('#mce_0_ifr');
  // await browser.switchToFrame(ele);

  // //interaction with iframe, selecting all and delete all previous/placeholder text and then enter keys
  // await browser.keys(['Meta', 'A']);
  // await browser.pause(1000);
  // await browser.keys('Delete');

  // await $('#tinymce').setValue(`Typing into a frame...`);

  // // //switch back to iframe
  // await browser.switchToParentFrame();

  // await browser.pause(10000);

  /**
   * 10. Basic scrolling
   *
   *
   */
  //we just to pass the locator and it will scroll to it
  // await $('').scrollIntoView();

  //it will keep the locator at bottom (in page) using false flag
  // await $('').scrollIntoView(false);

  /**Web Tables
   *
   */

  // 1 check number of rows and columns
  let rowCount = await $$("//table[@id='table1']/tbody/tr").length;
  console.log(`>>> Number of rows:${rowCount}`);
  chai.expect(rowCount).to.equal(4);

  let columnCount = await $$("//table[@id='table1']/thead/tr/th").length;
  console.log(`>>> Number of columns:${columnCount}`);
  chai.expect(columnCount).to.equal(6);

  //2. get whole table data
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastName: '',
  //     firstName: '',
  //     email: '',
  //     due: '',
  //     web: '',
  //   };
  //   for (let j = 0; j < columnCount; j++) {
  //     let celVal = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();
  //     console.log(`>>> Cell Value:${celVal}`);
  //     if (j == 0) personObj.lastName = celVal;
  //     if (j == 1) personObj.firstName = celVal;
  //     if (j == 2) personObj.email = celVal;
  //     if (j == 3) personObj.due = celVal;
  //     if (j == 4) personObj.web = celVal;
  //   }
  //   arr.push(personObj);
  // }

  // console.log(`Whole table : ${JSON.stringify(arr)}`);

  //3 get single row based on condition

  // let arr1 = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastName: '',
  //     firstName: '',
  //     email: '',
  //     due: '',
  //     web: '',
  //   };
  //   for (let j = 0; j < columnCount; j++) {
  //     let celVal = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();

  //     console.log(`>>> Cell Value:${celVal}`);
  //     const firstName = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`
  //     ).getText();
  //        // set conditio using name
  //     if (firstName === 'Jason') {
  //       if (j == 0) personObj.lastName = celVal;
  //       if (j == 1) personObj.firstName = celVal;
  //       if (j == 2) personObj.email = celVal;
  //       if (j == 3) personObj.due = celVal;
  //       if (j == 4) personObj.web = celVal;
  //     }
  //   }
  //   if (personObj.firstName) {
  //     arr1.push(personObj);
  //   }
  // }

  // console.log(`single row data : ${JSON.stringify(arr1)}`);

  // 4. get single column
  //getting 4the column values
  // let arr2 = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let celVal = await $(
  //     `//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`
  //   ).getText();
  //   arr2.push(celVal);
  // }
  // console.log(`>>>Single column values ${arr2}`);

  // getting single cell value (based on another cell)

  // let arr3 = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let price = await $(
  //     `//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`
  //   ).getText();
  //   let firstName = await $(
  //     `//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`
  //   ).getText();
  //   if (+price.replace('$', '') > 50) {
  //     arr3.push(firstName);
  //   }
  // }
  // console.log(`>>> single column values(due): ${arr3}`);

  /**
   * SCROLLING
   */

  //1. scroll up/down to visible portion of website

  await browser.execute(() => {
    //we pass x and y cordinate, no need to pass x coordinate as we want to scroll vertically(y-axis)
    //here it moved till the bottom part which was visible earlier and make it the top
    window.scrollBy(0, window.innerHeight);
  });

  await browser.pause(3000);
  //scroll top (use it with above code so to make it back to same visible portion)
  await browser.execute(() => {
    window.scrollBy(0, -window.innerHeight);
  });

  await browser.pause(3000);
  //2. to scroll to bottom of the page(which is not visible)
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await browser.pause(3000);
  // to scroll top of the page()
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollTop);
  });

  // await browser.debug();
});
