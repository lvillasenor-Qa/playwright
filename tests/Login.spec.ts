import { test, expect } from '@playwright/test';

test('TC01 - Successful user login', async ({ page }) => {
    // Step #1: Open the application URL
    await page.goto('https://practicesoftwaretesting.com/');

    // Validate that the page title is correct
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);

   // Step #2: Click the "Sign in" option
    await page.getByTestId('nav-sign-in').click();

   // Step #3: Enter email address and password
    await page.getByTestId('email').fill('customer3@practicesoftwaretesting.com');
    await page.getByTestId('password').fill('pass123');

    // Step #4: Click the "Sign in" button
    await page.getByTestId('login-submit').click();

   // Step #5: Validate that the user is redirected to the "Home" page
    await expect(page.getByTestId('page-title')).toContainText('My account')
});