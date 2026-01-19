import { test } from '@playwright/test';
import { WikipediaHomePage } from '../pages/WikipediaHomePage';
import { WikipediaResultsPage } from '../pages/WikipediaResultsPage';

const searchTerms = ['Playwright', 'Automation testing', 'QA engineering'];

for (const term of searchTerms) {
  test(`Wikipedia search for ${term}`, async ({ page }) => {
    const homePage = new WikipediaHomePage(page);
    const resultsPage = new WikipediaResultsPage(page);

    await homePage.open();
    await homePage.search(term);
    await resultsPage.verifyHeading(term);

    // Optional: screenshot for portfolio
    await page.screenshot({ path: `results-${term}.png`, fullPage: true });
  });
}