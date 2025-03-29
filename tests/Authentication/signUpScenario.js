import { test } from '../../fixtures/base';

test.describe('Magento Signing Up Scenarios', () => {

    test.beforeEach(async ({ Homepage }) => {
        await Homepage.navigate();
        await Homepage.clickCreateAcc();
    });

        test('Should register a new account', async ({ Accountpage }) => {
            await test.step('Should register a new account', async () => {
                //fill-in all the Personal Information
                await Accountpage.verifyPersonalInformation();

                //fill-in all the Sign-In Information
                await Accountpage.verifySignInInformation();

                //click the Create Account button
                await Accountpage.verifyclickCreateAccBtn();
            });
        });


});
