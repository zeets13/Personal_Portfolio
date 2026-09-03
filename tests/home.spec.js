import { test, expect } from '@playwright/test';

test('TC-001 - portfolio homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('jarifa-portfolio');
});
