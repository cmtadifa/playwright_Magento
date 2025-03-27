import { test } from '../../fixtures/base';

test.describe('Magento Authentication', () => {

    test.beforeEach(async ({ Homepage }) => {
        await Homepage.navigate();
        await Homepage.clickSignIn();
    });

        test('Successfully Log-In with valid Credentials', async ({ Accountpage }) => {

            //fill-in all the Sign-In Information
            await Accountpage.verifySignIn();

            //click the Sign-In button
            await Accountpage.verifyclickSignInBtn();

            await Accountpage.verifyhomepage();
        });

        test('Fails to Login with Invalid Credentials', async ({ Accountpage }) => {
            await test.step('Fails to Login with Invalid Credentials', async () => {
                //fill-in all the Sign-In Information
                await Accountpage.verifyInvalidSignIn();

                await Accountpage.verifyclickSignInBtn();

                await Accountpage.verifyhomepage();
            });
            
        });

});
