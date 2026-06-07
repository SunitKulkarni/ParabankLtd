//import { expect, Page} from '@playwright/test';

export 

/*AAA
POM = Where actions are written

AAA = How tests are organized

Arrange -> Create page objects + test data
Act     -> Call page methods
Assert  -> Verify result

*/

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

}
async clickRegister(){
    await this.page.locator('//a[.="Register"]').click();
}
async clickForgotPassword(){
    await this.page.locator('//a[.="Forgot login info?"]').click();
}
async clickAbout(){
    await this.page.getByRole('link', { name: 'about', exact: true }).click();
}
async clickContact(){
      await page.getByRole('link', { name: 'contact', exact: true }).click();

}
async clickHome(){
       await page.locator('body').click();
//getByRole('link', { name: 'Register' })
}
async clickRegisterLink(){
      await this.page.getByRole('link', { name: 'Register' }).click();

}

async verifyErrormsg(){

    await expect(this.page.getByText('An internal error has occurred and has been logged.')).toBeVisible();
   // await expect(this.page.getByText('Please enter a username and password.')).toBeVisible();
    //await expect(this.page.getByRole('heading', { name: 'ParaSoft Demo Website' })).toBeVisible();
    //await expect(page.getByRole('table')).toBeVisible();// contact us visible
   //await expect(page.getByText('Experience the difference')).toBeVisible();// home page

    //await expect(this.page.getByText('Please enter a username .')).toBeVisible();
    //await expect(this.page.getByText('Please enter a  password.')).toBeVisible();

}
async verifyWarning(){
    await expect(this.page.locator("//p[@class='error']")).toBeVisible();
 //await expect(this.page.getByText('Please enter a username and')).toBeVisible();
}
async verifyAccountPage(){
    await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
 //await expect(this.page.getByText('Please enter a username and')).toBeVisible();
}
//async verifyRegistrartionPage(page:Page){
     // await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).click();

}


