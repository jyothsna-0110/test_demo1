var {Given, When, Then,After} = require('cucumber');
var {browser, element, by} =require('protractor');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = browser.ExpectedConditions;
var PropertiesReader = require('properties-reader');
var or = PropertiesReader('property/or.properties');
var prop=PropertiesReader('property/prop.properties');
// for screenshot
After(function(scenarioResult){
    let self = this;
    if(scenarioResult.result.status === 'FAILED') {
    return browser.takeScreenshot().then(function(screenshot) {
        const decodedImage = new Buffer(screenshot.replace(/^dataimage\/png;base64,/, ''),'base64');
        self.attach(decodedImage, 'image/png');
        console.log('ScenarioResult = '+scenarioResult.result.status);
    });
    }
});

//for pagebjects
var base = require('../pages/basePage.js');

// user navigates to banking website
Given('user navigates to parabank website',async function () {
    await browser.waitForAngularEnabled(false);
     await base.go(prop.get('url'));
    await browser.sleep(2000);
  });

// user validates the title
  When('user validates the title of the page {string}',async function (title) {
    var actualTitle = base.getTitle();
    expect(actualTitle).to.eventually.equal(title);
    await browser.manage().window().maximize();
  });


var home = require('../pages/homePage.js')
//user clicks on customer login button
  Then('user clicks on customerLogin Button',async function () {
    await home.goToCustomerLogin();
    await browser.sleep(2000);
  });

var customerLogin = require('../pages/custLoginPage.js')
// user selects the customer name
  Then('user selects the value as from the list',async function () {
  //  await element(by.id('userSelect')).sendKeys(userName);
  //  await element(by.model(or.get('cust_idModel'))).$("[value='3']").click();
  //  await element(by.model(or.get('cust_idModel'))).$(or.get('cust_Name')).click();
  //  await browser.sleep(3000);
  customerLogin.goToCustomerLogin();

  await browser.wait(EC.visibilityOf(element(by.id('userSelect'))), 100000);
    
  await browser.wait(EC.invisibilityOf(element(by.xpath('//button[text()="Customer Login"]'))), 100000);
  
  });


  //user clicks on login button
  Then('user clicks on login button',async function () {
  // await element(by.xpath(or.get('loginBtnXPath'))).click();
    customerLogin.dologin();
});
var transaction=require('../pages/transactionPage.js')
  //user validates the welcome page 

  Then('user validates the welcome page as {string}',async function (validateText) {
    
    
    // await element(by.binding('user')).getText().then(function(text){
    //   expect(text).to.include(validateText);

    // }) 
    await browser.sleep(3000);
    await browser.waitForAngularEnabled(true); 
    var text=await element(by.binding('user')).getText();
    await console.log('user enters name as '+text);
    return expect(transaction.getCustomerText()).to.eventually.equal(validateText);
  });


