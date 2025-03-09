import { test } from '../fixtures/base';

test.describe('Magento Creating New Customer Account', () => {

    test.beforeEach(async ({ Homepage }) => {
        await Homepage.navigate();
        await Homepage.clickCreateAcc();
    });

        test('Should register a new account', async ({ Accountpage }) => {

            //fill-in all the Personal Information
            await Accountpage.verifyPersonalInformation();

            //fill-in all the Sign-In Information
            await Accountpage.verifySignInInformation();

            //click the Create Account button
            await Accountpage.verifyclickCreateAccBtn();
        });


});
