import {test, expect} from '@playwright/test';

test('TC-017 - Projects heading is displayed', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Projects I have Worked on' })).toBeVisible();
});

test('TC-018 - All project titles are displayed', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Cloud-Vote' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Hate Speech Detection Chatbot' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Heart Disease Risk Prediction System' })
  ).toBeVisible();
});

test('TC-019 - All project GitHub links are displayed', async ({ page }) => {
  await page.goto('/');

  const githubLinks = page.getByRole('link', {
    name: 'View Project on GitHub'
  });

  await expect(githubLinks).toHaveCount(3);

  await expect(githubLinks.nth(0)).toBeVisible();
  await expect(githubLinks.nth(1)).toBeVisible();
  await expect(githubLinks.nth(2)).toBeVisible();
});

test('TC-020 - GitHub links have correct URLs2', async ({ page }) => {
  await page.goto('/');

  const githubLinks = page.getByRole('link', {name: 'View Project on GitHub'});

  await expect(githubLinks.nth(0)).toHaveAttribute('href',/github\.com/); 

 
});

test('TC-021 - GitHub links have correct URLs', async ({ page }) => {
  await page.goto('/');

  const githubLinks = page.getByRole('link', {name: 'View Project on GitHub'});
 await expect(githubLinks.nth(1)).toHaveAttribute(
    'href',
    'https://github.com/zeets13/NLP_Project'
  );

  await expect(githubLinks.nth(2)).toHaveAttribute(
    'href',
    'https://github.com/zeets13/Python_project'
  );
});

test('TC-022 - Hate Speech project link opens correctly', async ({ page }) => {
  await page.goto('/');

  const link = page.getByRole('link', {
    name: 'View Project on GitHub'
  }).nth(1);

  const popupPromise = page.waitForEvent('popup');

  await link.click();

  const popup = await popupPromise;

  await expect(popup).toHaveURL("https://github.com/zeets13/Flaggr_Project");
});

test('TC-022 - Heart disease GitHub link opens correctly', async ({ page }) => {
  await page.goto('/');

  const link = page.getByRole('link', {
    name: 'View Project on GitHub'}).nth(2);

  const popupPromise = page.waitForEvent('popup');

  await link.click();

  const popup = await popupPromise;

  await expect(popup).toHaveURL("https://github.com/zeets13/Python_project");
});