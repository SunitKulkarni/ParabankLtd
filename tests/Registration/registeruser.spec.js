// This test Case is working as expected. 
import { test, expect } from '@playwright/test';
//import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../../pages/Login/RegistrationPage';



test('Verify blank field validations', async ({ page }) => {

  const registrationpage = new RegistrationPage(page);
const testData = [
  {
    scenario: 'All fields blank',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',
  },
  {
    scenario: 'Only First Name entered',
    firstName: 'UserFN1',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',

  },
  {
    scenario: 'Only Last Name entered',
    firstName: '',
    lastName: 'UserLN1',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',

  },
  {
    scenario: 'Only address entered',
    firstName: '',
    lastName: '',
    address: 'tttt',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',

  },
{
 scenario: 'only city Entered',
firstName: '',
    lastName: '',
    address: '',
    city: 'ggg',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',
},
{
scenario: 'only state Entered',
firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'uyuy',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',
},
{
scenario:'only Zip Entered',
firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'22222',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'',
},
{
scenario:'only SSN Entered',
firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'SDSS',
    username:'',
    password:'',
    repeatedPassword:'',
},
{
scenario:'only username Entered',
firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'eeee',
    password:'',
    repeatedPassword:'',
},
{
scenario:'only password Entered',
firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'yyyy',
    repeatedPassword:'',
},
{
scenario:'only repeatedPassword Entered',
firstName: '',
    lastName: '',
    address: '',
    city: '',
    state:'',
    zipCode:'',
    phoneNumber:'',
    ssn:'',
    username:'',
    password:'',
    repeatedPassword:'9999'
}

];
  for (const data of testData) {

    await registrationpage.invokeApp();
    //await page.pause();

    await registrationpage.performRegistration(
      data.firstName,
      data.lastName,
      data.address,
      data.city,
      data.state,
      data.zipCode,
      data.phoneNumber,
      data.ssn,
      data.username,
      data.password,
      data.repeatedPassword
    );

    await registrationpage.clickRegisterButton();

    await registrationpage.verifyRequiredFieldErrors(data);
  }
});


test.only ('Verify valid User', async ({ page }) => {

const registrationpage = new RegistrationPage(page);
const testData = [
  {
    firstName: 'USer01',
    lastName: 'USer01',
    address: 'USer01',
    city: 'USer01',
    state:'USer01',
    zipCode:'USer01',
    phoneNumber:'USer01',
    ssn:'USer01',
    username:'USer01',
    password:'USer0011',
    repeatedPassword:'USer001',
  }
]


    await registrationpage.invokeApp();
    //await page.pause();

    await registrationpage.performRegistration(
      data.firstName,
      data.lastName,
      data.address,
      data.city,
      data.state,
      data.zipCode,
      data.phoneNumber,
      data.ssn,
      data.username,
      data.password,
      data.repeatedPassword
    );

    await registrationpage.clickRegisterButton();

    await registrationpage.verifyRegistrationPage(); 
  }

);