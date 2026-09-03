import {test,expect} from '@playwright/test';

test("TC-015 - Skills section is visible", async ({ page }) => {
   await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'My Skills' })
  ).toBeVisible();
});

test('TC-016 - Logos load correctly', async ({ page }) => {
  await page.goto('/');

  const images = page.locator('section img');

  const count = await images.count();

  for (let i = 0; i < count; i++) {
    await expect(images.nth(i)).toHaveJSProperty('complete', true);
  }
});