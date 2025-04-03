import { test } from '../../fixtures/base';
import homePage from '../../support/pageObjects/homePage';
import Accountpage from '../../support/pageObjects/accountsPage';
import productPage from '../../support/pageObjects/productPage';
import { time } from 'console';

test.describe.configure({ mode: 'serial' });

test.describe('qwe', () => {

    let page, Homepage, Accpage, ProductPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        Homepage = new homePage(page);
        Accpage = new Accountpage(page);
        ProductPage = new productPage(page);

        await Homepage.navigate();
        
    });

    test('clicking navbar', async () => {
        await test.step('clicking navbar', async () => {
            await Homepage.waitNavigationArrow();
            await Homepage.selectNavigation('women');
            await Homepage.selectSubNavigation('women-tops');
            await page.pause();
        });
    });
});
