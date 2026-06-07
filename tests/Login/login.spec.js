// This test case is working as expected. 
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/Login/HomePage';
import { RegistrationPage } from '../../pages/Login/RegistrationPage';

test('The username and password could not be verified', async ({ page }) => {

const homepage= new HomePage (page);
   await homepage.invokeApp ();
   
await homepage.performLogin('abc1hgj23','abc1hg23');
await homepage.verifyErrormsg();

});
test('The username and password are not entered', async ({ page }) => {

const homepage= new HomePage (page);
   await homepage.invokeApp ();
await homepage.performLogin("","");
await page.waitForTimeout (3000);
await homepage.verifyWarning();

});

test ('The Valid User', async ({ page }) => {

const homepage= new HomePage (page);
   await homepage.invokeApp ();
await homepage.performLogin("john","demo");
await page.waitForTimeout (3000);
await homepage.verifyAccountPage();

});

test ('Register Page open', async ({ page }) => {

const homepage= new HomePage (page);
const registrationpage = new RegistrationPage(page);
   await homepage.invokeApp ();
   await registrationpage.invokeApp();
   //await page.pause();
await homepage.clickRegisterLink();
await page. waitForTimeout (3000);
await registrationpage.invokeApp();
await registrationpage.verifyRegistrationPage ();
});