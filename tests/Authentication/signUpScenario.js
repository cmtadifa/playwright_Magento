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
                await Accountpage.verifyhomepage();
            });
        });

        test.only('Sign up Required Field Error', async ({ page, Accountpage }) => {
            await test.step('Sign up Required Field', async () => {
                //click the Create Account button
                await Accountpage.verifyclickCreateAccBtn();
                await Accountpage.verifyRequiredErrorField();
            });
        });


});
