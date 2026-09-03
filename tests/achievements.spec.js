import {test,expect} from '@playwright/test';

test("TC-023 - Achievement section is visible", async ({ page }) => {
   await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Milestones & Growth' })
  ).toBeVisible();
});

test('TC-024 - Achievements load correctly', async ({ page }) => {
  await page.goto('/');
   await expect(
    page.getByRole('heading', { name: 'Achievements' })).toBeVisible();
});

test('TC-025 - Certifications load correctly', async ({ page }) => {
  await page.goto('/');
   await expect(
    page.getByRole('heading', { name: 'Certifications' })).toBeVisible();
});