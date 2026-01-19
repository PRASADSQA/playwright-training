import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async acceptCookiesIfVisible() {
    const acceptBtn = this.page.getByRole('button', { name: /accept/i });
    if (await acceptBtn.isVisible()) await acceptBtn.click();
  }
}