// This Test Case is Working as expected.........
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/Login/HomePage';
import { BillPayPage } from '../../pages/AccountServices/BillPayPage';
import { AccountsPage } from '../../pages/AccountServices/AccountsPage';
//import {Accounts, AccountsPage, BillPayPage  } from '../../pages/AccountServices/AccountPage';
test ('Verify valid Biller-- Get validations', async ({ page }) => {
 const homepage = new HomePage(page);
    const billpay = new BillPayPage(page);
    const accountpage = new AccountsPage(page);
// Login and navigate to account page. 
    await homepage.invokeApp();
    await homepage.performLogin('john', 'demo');
    await page.pause()
    
    // Navigate to Bill Pay
    await accountpage.clickBillPay();

const testData = [
  {
    scenario: 'All fields blank',
    PayeeName: '',
    Address: '',
    City: '',
    State: '',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:'',
    
  },
  {
    scenario: 'Only Payee Name entered',
    PayeeName: 'User01',
    Address: '',
    City: '',
    State: '',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:''

  },
  {
    scenario: 'Only Address entered',
    PayeeName: '',
    Address: 'ADD',
    City: '',
    State:'',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:''


  },
  {
    scenario: 'Only City entered',
    PayeeName: '',
    Address: '',
    City: 'City',
    State:'',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:''


  },
{
 scenario: 'only State Entered',
 PayeeName: '',
    Address: '',
    City: '',
    State: 'State',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:''
},
{
scenario: 'only ZipCode Entered',
 PayeeName: '',
    Address: '',
    City: '',
    State:'',
    ZipCode:'45555',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:''
},
{
scenario:'only Phone Entered',
 PayeeName: '',
    Address: '',
    City: '',
    State: '',
    ZipCode:'',
    Phone:'5546464',
    Account:'',
    VerifyAccount:'',
    Amount:''
},
{
scenario:'only Account Entered',
 PayeeName: '',
    Address: '',
    City: '',
    State: '',
    ZipCode:'',
    Phone:'',
    Account:'2131311',
    VerifyAccount:'',
    Amount:''
},
{
scenario:'only VerifyAccount Entered',
 PayeeName: '',
    Address: '',
    City: '',
    State: '',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'544646',
    Amount:''
},
{
scenario:'only Amount Entered',
 PayeeName: '',
    Address: '',
    City: '',
    State: '',
    ZipCode:'',
    Phone:'',
    Account:'',
    VerifyAccount:'',
    Amount:'546446'
},


];
// Loop through every scenario
    for (const data of testData) {
      console.log(`Running scenario: ${data.scenario}`)
 // Navigate to Bill Pay fresh for each scenario
    await accountpage.clickBillPay(); 

//const billpay= new BillPayPage(page);
//const data = testData;
//await billpay.invokeApp();

//fillBillPayDetails

await billpay.fillBillPayDetails (
    data.PayeeName,
      data.Address,
      data.City,
      data.State,
      data.ZipCode,
      data.Phone,
      data.Account,
      data.VerifyAccount,
      data.Amount,
      data.FromAccount
    );

    await billpay.clickSendPayment();

    await billpay.verifyBillerRequiredFieldErrors(data);

}
}
);

test ('Verify Successfull Pay-- Working', async ({ page }) => {
const homepage= new HomePage (page);
const accountpage = new AccountsPage(page);
const billpay = new BillPayPage(page);

// Login    
    await homepage.invokeApp ();
    await homepage.performLogin('john', 'demo');
    await page.pause()
    // navigate to account page
    await homepage.verifyAccountPage();
    // click on BillPay
    await accountpage.clickBillPay ();
    await billpay.invokeApp ();
    await billpay.fillBillPayDetails (
 'User01',
        'Address01',
        'City01',
        'State01',
        '12345',
        '9876543210',
        '12345',
        '12345',
        '100'
    );
await billpay.clickSendPayment();
await billpay.verifySuccessPayment();

    });


test.only  ('chk  Acoount and Verify Account should be same', async ({ page }) => {
const homepage= new HomePage (page);
const accountpage = new AccountsPage(page);
const billpay = new BillPayPage(page);

// Login    
    await homepage.invokeApp ();
    await homepage.performLogin('john', 'demo');
    await page.pause()
     const testData = [
        {
            scenario: 'Account no is not matching',
            PayeeName: 'AA',
            Address: 'AA',
            City: 'AA',
            State: 'AA',
            ZipCode: '222',
            Phone: '555',
            Account: '123',       // ✅ different from VerifyAccount
            VerifyAccount: '1234',
            Amount: '1000',        // ✅ added amount so only mismatch error appears
        }
    ];
 for (const data of testData) {
        console.log(`Running scenario: ${data.scenario}`);

        await accountpage.clickBillPay();

        await billpay.fillBillPayDetails(
            data.PayeeName,
            data.Address,
            data.City,
            data.State,
            data.ZipCode,
            data.Phone,
            data.Account,
            data.VerifyAccount,
            data.Amount,
            ''
        );

        await billpay.clickSendPayment();
        await billpay.verifyAccountNumberSame();  // ✅ no argument needed
    }
});

