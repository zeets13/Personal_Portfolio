import { test, expect } from '@playwright/test';

test('TC-011 - CV button is visible', async ({ page }) => {
  await page.goto('/');

   const resumeButton = page.getByRole('link', {
    name: 'Get my resume',
  });

  await expect(resumeButton).toBeVisible();
});

test('TC-012 - Cv gets downloaded', async ({ page }) => {
  await page.goto('/');

  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('link', { name: 'Get my resume' }).click();

  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBeTruthy();
});