import { expect } from '@playwright/test';

/*
AAA - How tests are organized
Arrange -> Create page objects + test data
Act     -> Call page methods
Assert  -> Verify result
*/

export class ForgotUser {

    constructor(page) {
        this.page = page;
    }

    async invokeApp() {
        await this.page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
    }
}
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Forgot login info?' }).click();
  await expect(page.getByRole('heading', { name: 'Customer Lookup' })).toBeVisible();
  await page.getByRole('button', { name: 'Find My Login Info' }).click();
  await expect(page.getByText('First name is required.')).toBeVisible();
  await expect(page.getByText('Last name is required.')).toBeVisible();
  await expect(page.getByText('Address is required.')).toBeVisible();
  await expect(page.getByText('City is required.')).toBeVisible();
  await expect(page.getByText('State is required.')).toBeVisible();
  await expect(page.getByText('Zip Code is required.')).toBeVisible();
  await expect(page.getByText('Social Security Number is')).toBeVisible();
  await page.locator('#firstName').click();
  await page.locator('#firstName').fill('Adam');
  await page.locator('#lastName').click();
  await page.locator('#lastName').fill('Adam');
  await page.locator('[id="address.street"]').click();
  await page.locator('[id="address.street"]').fill('Adam');
  await page.locator('[id="address.city"]').click();
  await page.locator('[id="address.city"]').fill('Adam');
  await page.locator('[id="address.state"]').click();
  await page.locator('[id="address.state"]').fill('Adam');
  await page.locator('[id="address.zipCode"]').click();
  await page.locator('[id="address.zipCode"]').fill('Adam');
  await page.locator('#ssn').click();
  await page.locator('#ssn').fill('Adam');
  await page.getByRole('button', { name: 'Find My Login Info' }).click();
  await expect(page.getByText('The customer information')).toBeVisible();
});
// 