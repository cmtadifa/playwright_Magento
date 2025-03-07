import { test } from '@playwright/test';
import homePage from '../support/pageObjects/homePage';
import accountsPage from '../support/pageObjects/accountsPage';

test.describe('Magento Login as a User', () => {

    test.beforeEach(async ({ page }) => {
        const hPage = new homePage(page);
        await hPage.navigate();
        await hPage.clickSignIn();
    });

        test('Should Successfully login Account', async ({ page }) => {
            
        });


});
