import { test, expect } from '@playwright/test';

test('TC01 - Login Happy Path', async ({ page }) => {

    //Paso #1: Abrir la url de la página a testear
    await page.goto('https://practicesoftwaretesting.com/');

    //Validar que el titulo corresponda al de la página que se solicitó abrir
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);

    //Paso #2: Clic en la opción "Iniciar sesión"
    await page.getByTestId('nav-sign-in').click();

    //Paso #3: Llenar los campos de "Dirección de correo electrónico" y "Contraseña"
    await page.getByTestId('email').fill('customer3@practicesoftwaretesting.com');
    await page.getByTestId('password').fill('pass123');

    //Paso #4: Clic en el botón "Iniciar sesión"
    await page.getByTestId('login-submit').click();

    //Paso #5: Validar que el usuario se encuentre en la pantalla de "Home"
    await expect(page.getByTestId('page-title')).toContainText('My account')
});