import { test } from '../../fixtures/base';

test.describe('Add Item to a Cart', () => {

    test.beforeEach(async ({ Homepage }) => {
        // await login;
        await Homepage.navigate();
    });

        test('Add item on cart', async ({ page, Homepage }) => {
        await Homepage.selectItem();
        await page.pause();
        // await Homepage.selectSize();
        });


});
