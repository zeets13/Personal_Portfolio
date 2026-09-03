import { test, expect } from '@playwright/test';

test('TC-011 - CV button is visible', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('link', { name: /download cv/i })
  ).toBeVisible();
});

test('TC-012 - Cv gets downloaded', async ({ page }) => {
  await page.goto('/');

  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('link', { name: /download cv/i }).click();

  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBeTruthy();
});