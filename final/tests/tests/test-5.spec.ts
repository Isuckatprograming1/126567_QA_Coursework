import { test, expect } from '@playwright/test';

test('test-login', async ({ page }) => {
  await page.goto('https://nedelya.com/auth/login');
  await page.getByRole('textbox', { name: 'Имейл' }).fill('raylss126@gmail.com');
  await page.getByRole('textbox', { name: 'Парола' }).fill('qwerty73');
  await page.getByRole('button', { name: 'Влезте с профила си' }).click();
});
//Тест за влизане в профил