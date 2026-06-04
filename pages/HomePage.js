import { expect } from '@playwright/test';
export 

class HomePage {
// invoke 
constructor(page){
    this.page =page;
}

async invokeApp()
{
await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
}
async performLogin(username,password){
  await this.page.locator('input[name="username"]').fill(username);
  await this.page.locator('input[name="password"]').fill(password);
  await this.page.getByRole('button', { name: 'Log In' }).click();
////a[.='Register']
}
async clickRegister(){
    await this.page.locator('//a[.="Register"]').click();
}
async clickforgotpassword(){
    await this.page.locator('//a[.="Forgot login info?"]').click();
}
async clickabout(){
    await this.page.getByRole('link', { name: 'about', exact: true }).click();
}
async clickcontact(){
      await page.getByRole('link', { name: 'contact', exact: true }).click();

}
async clickhome(){
       await page.locator('body').click();

}


async verifyErrormsg(){

    await expect(this.page.getByText('The username and password could not be verified.')).toBeVisible();
    await expect(this.page.getByText('Please enter a username and password.')).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'ParaSoft Demo Website' })).toBeVisible();
    await expect(page.getByRole('table')).toBeVisible();// contact us visible
    await expect(page.getByText('Experience the difference')).toBeVisible();// home page

    //await expect(this.page.getByText('Please enter a username .')).toBeVisible();
    //await expect(this.page.getByText('Please enter a  password.')).toBeVisible();

}


}
