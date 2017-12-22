import { Smrt1Page } from './app.po';

describe('smrt1 App', () => {
  let page: Smrt1Page;

  beforeEach(() => {
    page = new Smrt1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
