import { by, element, ElementFinder } from 'protractor'
import { CommonPageObject } from '../common.po'

export class AboutPage extends CommonPageObject {
  get pageTitle() {
    return element(by.id('aboutTitle')) as ElementFinder
  }
}
