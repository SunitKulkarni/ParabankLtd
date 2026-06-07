import { expect } from '@playwright/test';

/*
AAA - How tests are organized
Arrange -> Create page objects + test data
Act     -> Call page methods
Assert  -> Verify result
*/

export class AccountsPage {

    constructor(page) {
        this.page = page;
    }

    async invokeApp() {
        await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
    }

    async performLogin(username, password) {
        await this.page.locator('input[name="username"]').fill(username);
        await this.page.locator('input[name="password"]').fill(password);
        await this.page.getByRole('button', { name: 'Log In' }).click();
    }

    async clickRegister() {
        await this.page.locator('//a[.="Register"]').click();
    }

    async clickRegisterLink() {
        await this.page.getByRole('link', { name: 'Register' }).click();
    }

async clickBillPay() {
        await this.page.getByRole('link', { name: 'Bill Pay' }).click();
    }

    async clickForgotPassword() {
        await this.page.locator('//a[.="Forgot login info?"]').click();
    }

    async clickAbout() {
        await this.page.getByRole('link', { name: 'about', exact: true }).click();
    }

    async clickContact() {
        await this.page.getByRole('link', { name: 'contact', exact: true }).click();
    }

    async clickHome() {
        await this.page.locator('body').click();
    }

    async verifyErrormsg() {
        await expect(this.page.getByText('An internal error has occurred and has been logged.')).toBeVisible();
    }

    async verifyWarning() {
        await expect(this.page.locator("//p[@class='error']")).toBeVisible();
    }

    async verifyAccountPage() {
        await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    }

}