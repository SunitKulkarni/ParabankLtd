import { expect } from '@playwright/test';
import { AccountsPage } from '../../pages/AccountServices/AccountsPage';

/*
AAA - How tests are organized
Arrange -> Create page objects + test data
Act     -> Call page methods
Assert  -> Verify result
*/
export class BillPayPage {

    constructor(page) {
        this.page = page;
        this.fromAccount = this.page.locator('select[name="fromAccountId"]');
    }
async invokeApp() {
        await this.page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
    }
  
  async fillBillPayDetails(PayeeName,Address,City,State,ZipCode,Phone,Account,VerifyAccount,Amount,Fromaccount) {
    await this.page.locator('input[name="payee.name"]').fill(PayeeName ??'');
    await this.page.locator('input[name="payee.address.street"]').fill(Address ?? '');
    await this.page.locator('input[name="payee.address.city"]').fill(City ?? '');
    await this.page.locator('input[name="payee.address.state"]').fill(State ?? '');
    await this.page.locator('input[name="payee.address.zipCode"]').fill(ZipCode ?? '');
    await this.page.locator('input[name="payee.phoneNumber"]').fill(Phone ?? '');
    await this.page.locator('input[name="payee.accountNumber"]').fill(Account ?? '');
    await this.page.locator('input[name="verifyAccount"]').fill(VerifyAccount ?? '');
    await this.page.locator('input[name="amount"]').fill(Amount ?? '');
    await this.fromAccount.selectOption({ index: 0 });
    
    }

    async clickSendPayment() {
        await this.page.getByRole('button', { name: 'Send Payment' }).click();
    }

    async verifySuccessPayment() {
        await expect(this.page.getByRole('heading', { name: 'Bill Payment Complete' })).toBeVisible();
    }

    async verifyBillerRequiredFieldErrors(data) {
    
    if (!data.PayeeName)
        await expect(this.page.getByText('Payee name is required.')).toBeVisible();

    if (!data.Address)
        await expect(this.page.getByText('Address is required.')).toBeVisible();

    if (!data.City)
        await expect(this.page.getByText('City is required.')).toBeVisible();

    if (!data.State)
        await expect(this.page.getByText('State is required.')).toBeVisible();

    if (!data.ZipCode)
        await expect(this.page.getByText('Zip Code is required.')).toBeVisible();

if (!data.Phone)
        await expect(this.page.getByText('Phone number is required.')).toBeVisible();

if (!data.Account)
        await expect(this.page.locator('#validationModel-account-empty')).toBeVisible();

if (!data.VerifyAccount )
        await expect(this.page.locator('#validationModel-verifyAccount-empty')).toBeVisible();

if (!data.Amount)
        await expect(this.page.getByText('The amount cannot be empty.')).toBeVisible();

}
async verifyAccountNumberSame() {
    await expect(
        this.page.getByText('The account numbers do not match.')
    ).toBeVisible();
}
}