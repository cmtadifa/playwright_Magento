import { test } from '../../fixtures/base';
import homePage from '../../support/pageObjects/homePage';
import accountpage from '../../support/pageObjects/accountsPage';
import productPage from '../../support/pageObjects/productPage';
import { time } from 'console';

test.describe.configure({ mode: 'serial' });

test.describe('Purchase Item from Shopping Cart', () => {

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
            await Accpage.verifySignIn('user2');
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

    test('Check out', async () => {
        await test.step('checking out', async () => {
            await ProductPage.clickCartCheckoutBtn();
            await ProductPage.fillUpShippingAddress('user2');
            await page.pause();
        });
    });

});
