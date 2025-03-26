import { test } from '../../fixtures/base';

test.describe('Magento Login as a User', () => {

    test.beforeEach(async ({ Homepage }) => {
        await Homepage.navigate();
        await Homepage.clickSignIn();
    });

        test('Should Successfully login Account', async ({ Accountpage }) => {

            //fill-in all the Sign-In Information
            await Accountpage.verifySignIn();

            //click the Sign-In button
            await Accountpage.verifyclickSignInBtn();
        });


});
