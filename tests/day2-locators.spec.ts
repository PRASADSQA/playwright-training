import { test, expect } from '@playwright/test';
test('Verify example.com body text', async ({ page }) => {
  await page.goto('https://example.com/');

  const body = page.locator('body');

  await expect(body).toContainText(
    'This domain is for use in documentation examples without needing permission'
  );
});

test('Google.se search box exists', async ({ page }) => {
  await page.goto('https://www.google.se');
  const searchBox = page.getByRole('combobox');
  await expect(searchBox).toBeVisible();
});
