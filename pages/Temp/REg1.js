export
import { expect } from '@playwright/test';

export class RegistrartionPage{

constructor(page){
    this.page =page;
}

async invokeApp()
{
await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
}

async performRegistration(firstName,lastName,street,city,state,zipCode,phoneNumber,ssn,username,password,repeatedPassword){
  await this.page.locator('#customer\.firstName').fill(firstName);
  await this.page.locator('#customer\.lastName').fill(lastName);
await this.page.locator('#customer\.address\.street').fill(street);
  await this.page.locator('#customer\.address\.city').fill(city);
  await this.page.locator('#customer\.address\.state').fill(state);
  await this.page.locator('#customer\.address\.zipCode').fill(zipCode);
  await this.page.locator('#customer\.phoneNumber').fill(phoneNumber);
  await this.page.locator('#customer\.ssn').fill(ssn);
  //#customer\.address\.street
  // User Name -- 
  await this.page.locator('#customer\.username').fill(username);
  await this.page.locator('#customer\.password').fill(password);
await this.page.locator('#repeatedPassword').fill(repeatedPassword);
  

}
async clickRegisterButton(){
    await this.page.locator('//a[.="Register"]').click();
}


async verifyRegistrartionPage(){
      await expect(this.page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
//await expect(this.page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible(); // ✅
}



}
