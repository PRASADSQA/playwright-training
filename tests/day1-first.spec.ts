import { test, expect } from '@playwright/test';

test('Example site loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Verify example.com body text', async ({ page }) => {
  await page.goto('https://example.com/');

  const body = page.locator('body');

  await expect(body).toContainText(
    'This domain is for use in documentation examples without needing permission'
  );
});

