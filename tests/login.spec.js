import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('The username and password could not be verified', async ({ page }) => {

const homepage= new HomePage (page);
   await homepage.invokeApp ();
await homepage.performLogin('abc1hgj23','abc1hg23');
await homepage.verifyErrormsg();

});
test('The username and password are not entered', async ({ page }) => {

const homepage= new HomePage (page);
   await homepage.invokeApp ();
await homepage.performLogin( );
await homepage.verifyErrormsg();

  
  
 
});