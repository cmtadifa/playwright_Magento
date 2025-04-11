import { test } from '../../fixtures/base';
import homePage from '../../support/pageObjects/homePage';
import accountpage from '../../support/pageObjects/accountsPage';
import productPage from '../../support/pageObjects/productPage';
import emailAPI from '../../support/api/email';

test.describe.configure({ mode: 'serial' });

test.describe('qwe', () => {

    let page, Homepage, Accpage, ProductPage, EmailAPI;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        Homepage = new homePage(page);
        Accpage = new accountpage(page);
        ProductPage = new productPage(page);
        EmailAPI = new emailAPI(page.request);


        await Homepage.navigate();
        
    });

    test('hover navbar', async () => {
        await test.step('clicking navbar', async () => {
            // await ProductPage.searchProduct();
        });
    });
});
