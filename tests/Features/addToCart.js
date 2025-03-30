import { test } from '../../fixtures/base';
import homePage from '../../support/pageObjects/homePage';
import Accountpage from '../../support/pageObjects/accountsPage';
import { time } from 'console';

test.describe.configure({ mode: 'serial' });

test.describe('Add Item to a Cart', () => {

    let page, Homepage, accpage;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();
        Homepage = new homePage(page);
        accpage = new Accountpage(page);

        await Homepage.navigate();
        await Homepage.clickSignIn();
    });

    test('Login using Valid Credentials', async () => {
        await test.step('Login using Valid Credentials', async () => {

        await accpage.verifySignIn();

        await accpage.verifyclickSignInBtn();

        });
    });


    test('Add item on cart', async () => {
        await test.step('Add item on cart', async () => {

        await Homepage.selectItem();

        });
    });


});
