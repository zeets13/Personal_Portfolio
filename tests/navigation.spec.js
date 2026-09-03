import { test, expect } from '@playwright/test';
test('TC-002 - main navigation is visible', async ({ page }) => {
  await page.goto('/');

  const navigation = page.locator('nav');

  await expect(navigation).toBeVisible();
});

test('TC-003 - Navigation buttons are visible', async ({ page }) => {
  await page.goto('/');

  const navigation = page.locator('nav');

  await expect(navigation).toBeVisible();

  await expect(
    navigation.getByRole('button', { name: "home"})).toBeVisible();

  await expect(
    navigation.getByRole('button', { name: "about" })).toBeVisible();

  await expect(
    navigation.getByRole('button', { name: "skills" })).toBeVisible();

  await expect(
    navigation.getByRole('button', { name: "projects" })).toBeVisible();
});

test('TC-004 - Navigation button (Home) works', async ({ page }) => {
  await page.goto('/');

  if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  await page.getByRole('button', { name: "Home" }).click();

  await expect(page.getByText('Hi, I\'m Jarifa!')).toBeVisible();
});


test('TC-005 - Navigation button (About) works', async ({ page }) => {
  await page.goto('/');

  if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  await page.getByRole('button', { name: "About" }).click();

  await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
});

test('TC-006 - Navigation button (Skills) works', async ({ page }) => {
  await page.goto('/');

  if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  await page.getByRole('button', { name: "Skills" }).click();

  await expect(page.getByRole('heading', { name: 'My Skills' })).toBeVisible();
});
test('TC-007 - Navigation button (Projects) works', async ({ page }) => {
  await page.goto('/');

  if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  await page.getByRole('button', { name: "Projects" }).click();

  await expect(page.getByRole('heading', { name: 'Projects I have Worked on' })).toBeVisible();
});

test('TC-008 - LinkedIn link works', async ({ page }) => {
  await page.goto('/');
   if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  const linkedIn = page.getByRole('link', { name: 'LinkedIn' });

  await expect(linkedIn).toBeVisible();

  const popupPromise = page.waitForEvent('popup');

  await linkedIn.click();

  const popup = await popupPromise;

  await expect(popup).toHaveURL(/linkedin\.com/);
});

test('TC-009 - GitHub link works', async ({ page }) => {
  await page.goto('/');
  if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  const github = page.getByRole('link', { name: 'Github' ,exact: true });

  await expect(github).toBeVisible();

  const popupPromise = page.waitForEvent('popup');

  await github.click();

  const popup = await popupPromise;

  await expect(popup).toHaveURL(/github\.com/);
});

test('TC-010 - Email link works', async ({ page }) => {
  await page.goto('/');
  if (await page.getByRole('button', { name: "Open menu" }).isVisible()) {
    await page.getByRole('button', { name: "Open menu" }).click();
  }

  const email = page.getByRole('link', { name: 'Email' });

  await expect(email).toBeVisible();

  await expect(email).toHaveAttribute('href', /^mailto:/);
});