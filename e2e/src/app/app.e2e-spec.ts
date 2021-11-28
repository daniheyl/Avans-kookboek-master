import { AppPage } from './app.po'
import { browser, logging } from 'protractor'

describe('This Angular webapp', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display "My App" as navbar-brand', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('My App')
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER)
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    )
  })
})
