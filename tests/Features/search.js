import { test } from '../../fixtures/base';
import productPage from '../../support/pageObjects/productPage';
import homePage from '../../support/pageObjects/homePage';

test.describe.configure({ mode: 'serial' });

test.describe('Product Searching', () => {

    let page, ProductPage, Homepage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        Homepage = new homePage(page);
        ProductPage = new productPage(page);

        await Homepage.navigate();
    });

    test('Search a Product', async () => {
        await test.step('Searching a Product', async () => {
            await ProductPage.searchProduct();
        });
    });
});
