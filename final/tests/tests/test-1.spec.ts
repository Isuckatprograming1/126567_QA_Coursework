import { test, expect } from '@playwright/test';

test('test-promokod', async ({ page }) => {
  await page.goto('https://nedelya.com/product/cherveno-kadife');
  await page.getByRole('link', { name: 'Изберете разновидност ' }).click();
  await page.locator('#select2-result-label-3').click();
  await page.getByRole('button', { name: 'Купи' }).click();
  await page.getByRole('button', { name: 'Приемам' }).click();
  await page.locator('a').filter({ hasText: 'Продължи към плащане' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Код за отстъпка' }).click();
  await page.getByRole('textbox', { name: 'Код за отстъпка' }).fill('fgdgfdgfd');
  await page.getByRole('button', { name: 'Приложи' }).click();
  await page.getByText('Моля въведете първо точен адрес, часови диапозон за доставка и тогава приложете ').click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
});
///Този тест има за цел да покаже какво ще стане ако в "Код за отстъпка" се напише някаква дума (дори не работи ако не е в София)