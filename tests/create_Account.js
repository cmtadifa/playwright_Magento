import { test } from '@playwright/test';
import homePage from '../support/pageObjects/homePage';
import accountsPage from '../support/pageObjects/accountsPage';

test.describe.configure({ mode: 'serial' });

let page; // Shared page

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext(); // ✅ Shared context
    page = await context.newPage(); // ✅ Shared page instance
});

test('should verify home page title', async () => {
    const hPage = new homePage(page);
    await hPage.accessPage();
});

test('should click create account', async () => {
    const hPage = new homePage(page);
    await hPage.createAcc();
});

test('should Enter a Name', async () => {
    const accPage = new accountsPage(page);
    await accPage.testFName();
});
