import { Angular4BddCucumberPage } from './app.po';

describe('angular4-bdd-cucumber App', () => {
  let page: Angular4BddCucumberPage;

  beforeEach(() => {
    page = new Angular4BddCucumberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
