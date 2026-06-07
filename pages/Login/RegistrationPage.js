import { expect } from '@playwright/test';

export class RegistrationPage {

    constructor(page) {
        this.page = page;
    }

    async invokeApp() {
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
    }

    async performRegistration(firstName, lastName, street, city, state, zipCode, phoneNumber, ssn, username, password, repeatedPassword) {
        await this.page.locator('#customer\\.firstName').fill(firstName);
        await this.page.locator('#customer\\.lastName').fill(lastName);
        await this.page.locator('#customer\\.address\\.street').fill(street);
        await this.page.locator('#customer\\.address\\.city').fill(city);
        await this.page.locator('#customer\\.address\\.state').fill(state);
        await this.page.locator('#customer\\.address\\.zipCode').fill(zipCode);
        await this.page.locator('#customer\\.phoneNumber').fill(phoneNumber);
        await this.page.locator('#customer\\.ssn').fill(ssn);
        await this.page.locator('#customer\\.username').fill(username);
        await this.page.locator('#customer\\.password').fill(password);
        await this.page.locator('#repeatedPassword').fill(repeatedPassword);
    }

    async clickRegisterButton() {
        await this.page.locator('//input[@value="Register"]').click();
    }

    async verifyRegistrationPage() {
        await expect(this.page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
    }


async verifyRequiredFieldErrors(data) {
    
    if (!data.firstName)
        await expect(this.page.getByText('First name is required.')).toBeVisible();

    if (!data.lastName)
        await expect(this.page.getByText('Last name is required.')).toBeVisible();

    if (!data.username)
        await expect(this.page.getByText('Username is required.')).toBeVisible();

    if (!data.password)
        await expect(this.page.getByText('Password is required.')).toBeVisible();

    if (!data.repeatedPassword)
        await expect(this.page.getByText('Password confirmation is required.')).toBeVisible();

if (!data.ssn)
        await expect(this.page.getByText('Social Security Number is required.')).toBeVisible();

if (!data.zipCode)
        await expect(this.page.getByText('Zip Code is required.')).toBeVisible();

if (!data.state)
        await expect(this.page.getByText('State is required.')).toBeVisible();

if (!data.city)
        await expect(this.page.getByText('City is required.')).toBeVisible();

if (!data.address)
        await expect(this.page.getByText('Address is required.')).toBeVisible();
}
}