import { test, expect } from '@playwright/test';

test('test-qka-torta', async ({ page }) => {
  await page.goto('https://nedelya.com/product/koledna-gorichka-1');
const acceptButton = page.getByRole('button', { name: 'Приемам' });
  if (await acceptButton.isVisible({ timeout: 5000 })) { 
    await acceptButton.click();
  }
  await page.getByRole('link', { name: 'Изберете разновидност ' }).click();
  await page.locator('#select2-result-label-3').click();
  await page.locator('div:nth-child(7) > ._radio > img').click();
  await page.locator('input[name="option[1]"]').fill('Penka');
  await page.getByRole('button', { name: 'Купи' }).click();
  await page.locator('button').filter({ hasText: 'Продължи с пазаруването' }).click();
});
///Показва се че може да се избере разновидност на торта и след това се натиска бутона "Продължи с пазаруването"