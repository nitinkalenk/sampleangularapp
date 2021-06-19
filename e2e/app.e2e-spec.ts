import { Newangproject2Page } from './app.po';

describe('newangproject2 App', () => {
  let page: Newangproject2Page;

  beforeEach(() => {
    page = new Newangproject2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
