// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/login');

  // Expect a title "to contain" a substring.
 await page.locator("#userName").fill('');
await page.locator('#password').fill('password');
 await page.locator('#login').click();
 await expect(page.getByRole('textbox', { name: 'UserName' })).toBeVisible();
await page.waitForTimeout (5000);


});
/*
await expect(page.getByRole('textbox', { name: 'firstname' })).toBeVisible();
#firstname
await expect(page.getByRole('textbox', { name: 'lastname' })).toBeVisible();
#lastname
await expect(page.getByRole('textbox', { name: 'UserName' })).toBeVisible();
#userName
await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
#password



*/