import { test as base } from '@playwright/test';
import homePage from '../support/pageObjects/homePage';
import accountsPage from '../support/pageObjects/accountsPage';

// Declare the types of your fixtures.
// type MyFixtures = {
//     hPage: homePage;
//     aPage: accountsPage;
//   };
  
  // Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend({
    Homepage: async ({ page }, use) => {
      // Use the fixture value in the test.
      await use(new homePage(page));
    },
    Accountpage: async ({ page }, use) => {
      // Use the fixture value in the test.
      await use(new accountsPage(page));
    },
    login: async ({ Homepage, Accountpage }, use) => {
      await Homepage.navigate();
      await Homepage.clickSignIn();
      await Accountpage.verifySignIn();
      await Accountpage.verifyclickSignInBtn();
      await use();
  }
  });
export { expect } from '@playwright/test';