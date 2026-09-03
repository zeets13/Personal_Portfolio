import {test,expect} from '@playwright/test';

test("TC-026 - Contact section is visible", async ({ page }) => {
   await page.goto('/');

  await expect(
    page.getByText("Get In Touch")).toBeVisible();
});

 test('TC-027 - Contact information is displayed', async ({ page }) => {
       await page.goto('/');

        await expect(page.getByText('Location')).toBeVisible();
      
        await expect(page.getByText('Phone')).toBeVisible();
});
test('TC-028 - Contact information is displayed', async ({ page }) => {
       await page.goto('/');
  await expect(page.getByText('Email')).toBeVisible();
});

test('TC-029 - form fields should be visible', async ({ page }) => {
     await page.goto('/');

    await expect(
        page.getByRole('textbox', { name: 'Name' })).toBeVisible();
        

        await expect(
            page.getByRole('textbox', { name: 'Email' })).toBeVisible();

        await expect(
            page.getByRole('textbox', { name: 'Message' })).toBeVisible();
    });

 test('TC30 - User should be able to enter valid information', async ({ page }) => {
     await page.goto('/');

        const name =  page.getByRole('textbox', { name: 'Name' });
        const email = page.getByRole('textbox', { name: 'Email' })
        const message = page.getByRole('textbox', { name: 'Message' });

        await name.fill('Jarifa');
        await email.fill('jarifa13@gmail.com');
        await message.fill('Helloo');

        await expect(name).toHaveValue('Jarifa');
        await expect(email).toHaveValue('jarifa13@gmail.com');
        await expect(message).toHaveValue('Helloo');
        
    });

    test('TC-31 - Submit button is enabled', async ({ page }) => {
         await page.goto('/');

        const button = page.getByRole('button', { name: /Send Message/i});

        await expect(button).toBeEnabled();
    });
test('TC-32- Invalid email address is rejected', async ({ page }) => {
     await page.goto('/');

    const name =  page.getByRole('textbox', { name: 'Name' });
        const email = page.getByRole('textbox', { name: 'Email' })
        const message = page.getByRole('textbox', { name: 'Message' });

    await name.fill('John Doe');
    await email.fill('invalid-email');
    await message.fill('This is a test message.');

    await page.getByRole('button', {
        name: /Send Message/i
    }).click();

    await expect(email).toHaveAttribute('type', 'email');
});