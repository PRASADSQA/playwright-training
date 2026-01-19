import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WikipediaHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('https://www.wikipedia.org');
  }

  async search(term: string) {
    const searchInput = this.page.getByRole('combobox');
    await searchInput.fill(term);
    await searchInput.press('Enter');
  }
}