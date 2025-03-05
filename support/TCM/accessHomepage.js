import { test } from '@playwright/test';
import homePage from '../support/pageObjects/homePage';

test.describe('Go to homepage', () => {
    test('should redirect to HomePage', async ({ page }) => {
        const hPage = new homePage(page);
        await hPage.accessPage();
    });

});