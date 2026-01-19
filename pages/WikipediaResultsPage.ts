import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WikipediaResultsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyHeading(text: string) {
    const heading = this.page.locator('#firstHeading');
    await expect(heading).toContainText(text);
  }
}