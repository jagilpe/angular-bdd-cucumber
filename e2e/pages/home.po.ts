import { browser, by, element, promise } from "protractor";

export class HomePageObject {

  get(): promise.Promise<void> {
    return browser.get('');
  }

  setInput(inputName: string, value: string): promise.Promise<void> {
    return element(by.css(`input[name="${inputName}"]`)).sendKeys(value);
  }

  getGreeting(): promise.Promise<string> {
    return element(by.css('#greeting')).getText();
  }

  clickButton(buttonName: string): promise.Promise<void> {
    return element(by.css(`button#${buttonName}`)).click();
  }
}
