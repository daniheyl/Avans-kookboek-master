import { AboutPage } from './about.po'
import { browser, logging } from 'protractor'

describe('About page', () => {
  let page: AboutPage

  beforeEach(() => {
    page = new AboutPage()
    page.navigateTo('/about')
  })

  /**
   *
   */
  it('should be at /about route after initialisation', () => {
    browser.waitForAngularEnabled(false)
    expect(browser.getCurrentUrl()).toContain('/about')
  })

  it('should display the correct page title text.', () => {
    browser.waitForAngularEnabled(false)
    const pageTitle = page.pageTitle

    expect(pageTitle.getText()).toContain('Over deze applicatie')
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
