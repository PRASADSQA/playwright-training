import { test, expect } from '@playwright/test';

test('Wikipedia homepage loads', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');

  // Assert page title contains "Wikipedia"
  await expect(page).toHaveTitle(/Wikipedia/);

  // Check main search input is visible
  const searchInput = page.getByRole('combobox');
  await expect(searchInput).toBeVisible();

  // Type a search query
  await searchInput.fill('Playwright');
  await searchInput.press('Enter');

  // Wait for search results page
  await page.waitForURL(/Playwright/);

  // Verify first heading contains "Playwright"
  const heading = page.locator('#firstHeading');
  await expect(heading).toContainText('Playwright');

  // Optional: take a screenshot for demo
  await page.screenshot({ path: 'wikipedia-playwright-search.png', fullPage: true });
});
