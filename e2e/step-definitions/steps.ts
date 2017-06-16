import { defineSupportCode } from "cucumber";
import { HomePageObject } from "../pages/home.po";

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {

  let homePage = new HomePageObject();

  Given(/^I am on the Home page$/, () => {
    return homePage.get();
  });

  When(/^I write (.+) in the (.+) input$/, (value, input) => {
    return homePage.setInput(input, value);
  });

  When(/^I click on (.+) button$/, (button) => {
    return homePage.clickButton(button);
  });

  Then(/^the greeting should be (.+)$/, (greeting, callback) => {
    greeting = greeting.replace(/['"]+/g, '');
    homePage.getGreeting().then(pageGreeting => {
      expect(pageGreeting).to.equal(greeting);
      callback();
    });
  });
});
