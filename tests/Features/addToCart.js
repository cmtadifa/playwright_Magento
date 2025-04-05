import { test } from '../../fixtures/base';
import homePage from '../../support/pageObjects/homePage';
import accountpage from '../../support/pageObjects/accountsPage';
import productPage from '../../support/pageObjects/productPage';

test.describe.configure({ mode: 'serial' });

test.describe('Add Item to a Cart', () => {

    let page, Homepage, Accpage, ProductPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        Homepage = new homePage(page);
        Accpage = new accountpage(page);
        ProductPage = new productPage(page);

        await Homepage.navigate();
        await Homepage.clickSignIn();
    });

    test('Login using Valid Credentials', async () => {
        await test.step('Login using Valid Credentials', async () => {
            await Accpage.verifySignIn('user1');
            await Accpage.verifyclickSignInBtn();
        });
    });

    test('Add item on cart', async () => {
        await test.step('Add item on cart', async () => {
            await ProductPage.addingToCart();
        });
    });
});
