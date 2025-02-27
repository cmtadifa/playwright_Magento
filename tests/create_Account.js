// @ts-check
import { test, expect } from '@playwright/test';
import homePage from '../support/pageObjects/homePage';


test.describe('Login Tests', () => {
    test('should verify home page title', async ({ page }) => {
      const hPage = new homePage(page);
      await hPage.accessPage();
  });

  //enhacnce
    test('should click create account', async ({ page }) => {
      const hPage = new homePage(page);
      await hPage.createAcc();
  });
  
});