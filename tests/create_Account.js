import { test } from '@playwright/test';
import homePage from '../support/pageObjects/homePage';
import accountsPage from '../support/pageObjects/accountsPage';

test.describe('Magento Creating New Customer Account', () => {

    test.beforeEach(async ({ page }) => {
        const hPage = new homePage(page);
        await hPage.navigate();
        await hPage.clickCreateAcc();
    });

        test('Should register a new account', async ({ page }) => {
            const aPage = new accountsPage(page);

            //fill-in all the Personal Information
            await aPage.fillPersonalInformation();

            //fill-in all the Sign-In Information
            await aPage.fillSignInInformation();

            //click the Create Account button
            await aPage.clickCreateAccBtn();
        });


});
