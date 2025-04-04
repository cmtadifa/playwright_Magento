import { test } from '../../fixtures/base';
import homePage from '../../support/pageObjects/homePage';
import Accountpage from '../../support/pageObjects/accountsPage';
import productPage from '../../support/pageObjects/productPage';

test.describe.configure({ mode: 'serial' });

test.describe('Purchase Item from Shopping Cart', () => {

    let page, Homepage, Accpage, ProductPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        Homepage = new homePage(page);
        Accpage = new Accountpage(page);
        ProductPage = new productPage(page);

        await Homepage.navigate();
        await Homepage.clickSignIn();
    });

    test('Login using Valid Credentials', async () => {
        await test.step('Login using Valid Credentials', async () => {
            await Accpage.verifySignIn();
            await Accpage.verifyclickSignInBtn();
        });
    });

    test('Add item on cart', async () => {
        await test.step('Add item on cart', async () => {
            await ProductPage.addingToCart();
        });
    });

    test('click the shopping cart', async () => {
        await test.step('clicking shopping cart', async () => {
            await Homepage.selectShoppingCart();
        });
    });

});
