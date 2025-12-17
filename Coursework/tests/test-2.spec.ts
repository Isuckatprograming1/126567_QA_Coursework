import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://nedelya.com/');
  await page.getByRole('link').nth(3).click();
  await page.getByRole('button', { name: 'Приемам' }).click();
  await page.getByRole('link', { name: ' Вход' }).click();
  await page.getByRole('textbox', { name: 'Имейл' }).click();
  await page.getByRole('textbox', { name: 'Имейл' }).fill('сдсдс');
  await page.getByRole('textbox', { name: 'Парола' }).click();
  await page.getByRole('textbox', { name: 'Парола' }).fill('дсдсдсд');
  await page.getByRole('button', { name: 'Влезте с профила си' }).click();
  await page.getByText('Имейлът е невалиден').click();
  await page.getByText('Имейлът е невалиден').click();
});
//Тест с невалидни Имейл и парола