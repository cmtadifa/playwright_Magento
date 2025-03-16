import { test } from '../fixtures/base';

test.describe('Add Item to a Cart', () => {

    test.beforeEach(async ({ login }) => {
        await login;
    });

        test('Add item on cart', async ({ Homepage }) => {

        await Homepage.selectItem();
        });


});
