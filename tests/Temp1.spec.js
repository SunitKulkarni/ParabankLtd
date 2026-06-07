import { test, expect } from '@playwright/test';

test('Register validation scenarios', async ({ page }) => {

  const testData = [
  {
    scenario: 'All fields blank',
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  },
  {
    scenario: 'Only First Name entered',
    firstName: 'Sunit',
    lastName: '',
    userName: '',
    password: ''
  },
  {
    scenario: 'Only Last Name entered',
    firstName: '',
    lastName: 'Kulkarni',
    userName: '',
    password: ''
  },
  {
    scenario: 'Only Password entered',
    firstName: '',
    lastName: '',
    userName: '',
    password: 'Test123'
  }
];
  for (const data of testData) {

    console.log(`Running Scenario: ${data.scenario}`);

    await page.goto('https://demoqa.com/register');

    await page.locator('#firstname').fill(data.firstName);
    await page.locator('#lastname').fill(data.lastName);
    await page.locator('#userName').fill(data.userName);
    await page.locator('#password').fill(data.password);

    await page.getByRole('button', { name: 'Register' }).click();

    // Validation checks
    if (!data.firstName) {
      await expect(page.getByRole('textbox', { name: 'firstname' })).toBeVisible();
    }

    if (!data.lastName) {
      await expect(page.getByRole('textbox', { name: 'lastName' })).toBeVisible();
    }

    if (!data.userName) {
      await expect(page.getByRole('textbox', { name: 'userName' })).toBeVisible();
    }

    if (!data.password) {
     await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
    }
  }
});