import {test,expect} from '@playwright/test';

test("TC-026 - Contact section is visible", async ({ page }) => {
   await page.goto('/');

  await expect(page.locator('div').filter({ hasText: 'ContactMeReach Out To me For' }).nth(2)).toBeVisible();
});
test("TC-027 - Contact section is visible", async ({ page }) => {
   await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Contact Me' })).toBeVisible();
});


test('TC-028 - Contact information is displayed', async ({ page }) => {
       await page.goto('/');

        await expect(page.getByText('Dhaka, Bangladesh')).toBeVisible();
      
        await expect(page.getByText('+880 1984 284')).toBeVisible();
        await expect( page.getByRole('link', { name: 'jarifatasnim13@gmail.com' })).toBeVisible();
});

test('TC-029 - form fields should be visible', async ({ page }) => {
     await page.goto('/');

    await expect(
        page.getByRole('textbox', { name: 'Your Name*' })).toBeVisible();
    await expect(
        page.getByRole('textbox', { name: 'Your E-mail Address*' })).toBeVisible();
         

        await expect(
            page.getByRole('textbox', { name: 'Type Your Message...' })).toBeVisible();
    });




    test('TC-31 - Submit button is enabled', async ({ page }) => {
         await page.goto('/');

        const button = page.getByRole('button', { name: /Send!/i});

        await expect(button).toBeEnabled();
    });
test('TC-32- Invalid email address is rejected', async ({ page }) => {
     await page.goto('/');

    const name =  page.getByRole('textbox', { name: 'Your Name*' });
        const email = page.getByRole('textbox', { name: 'Your E-mail Address*' });
        const message = page.getByRole('textbox', { name: 'Type Your Message...' });

    await name.fill('Jarifa');
    await email.fill('invalid-email');
    await message.fill('This is a test message.');

    await page.getByRole('button', { name: /Send!/i}).click();

    await expect(email).toHaveAttribute('type', 'email');
});