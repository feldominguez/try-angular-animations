import { AnimationsPage } from './app.po';

describe('animations App', () => {
  let page: AnimationsPage;

  beforeEach(() => {
    page = new AnimationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
