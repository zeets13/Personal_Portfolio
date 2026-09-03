import {test, expect} from '@playwright/test';

test("TC-013 - About Me section is visible", async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
});
test("TC-014 - Image is visible", async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('img', { name: 'About Jarifa' })).toBeVisible();
});