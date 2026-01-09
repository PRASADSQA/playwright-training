import { test, expect } from '@playwright/test';
test('Google search', async ({ page }) => {
  await page.goto('https://www.google.se');
  await page.fill('input[name="q"]', 'Playwright automation');
  await page.keyboard.press('Enter');
  await expect(page).toHaveTitle(/Playwright/);
});
