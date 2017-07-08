import { MyApp8Page } from './app.po';

describe('my-app8 App', () => {
  let page: MyApp8Page;

  beforeEach(() => {
    page = new MyApp8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
