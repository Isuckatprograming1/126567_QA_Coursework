import { test, expect } from '@playwright/test';

test('test-magistrala', async ({ page }) => {
  await page.goto('https://nedelya.com/');
  await page.getByRole('button', { name: 'Приемам' }).click();
  await page.getByRole('button').first().click();
  await page.getByRole('textbox', { name: 'Търси' }).click();
  await page.getByRole('textbox', { name: 'Търси' }).fill('писта');
  await page.getByRole('link', { name: 'Писта Детски торти' }).click();
  await page.locator('#s2id_autogen1').getByRole('link', { name: 'Изберете разновидност ' }).click();
  await page.locator('#select2-result-label-5').click();
  await page.locator('div:nth-child(5) > ._radio > img').click();
  await page.getByRole('link', { name: 'Изберете разновидност ' }).click();
  await page.locator('#select2-result-label-11').click();
  await page.locator('input[name="option[1]"]').fill('Честита ни магистрала!!!');
  await page.getByRole('button', { name: 'Купи' }).click();
  await page.locator('button').filter({ hasText: 'Продължи с пазаруването' }).click();
});
////Този тест има за цел да провери дали Писта Детски торти може да има Надпис върху тортата