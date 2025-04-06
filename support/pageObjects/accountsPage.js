import { expect } from '@playwright/test';
import { faker, th } from '@faker-js/faker';
import users from '../../fixtures/test-data/users.json';
import * as cc from '../commands';

class accountsPage {
    constructor(page) {
        this.page = page;

        //SignUp
        this.firstname = page.locator('#firstname');
        this.lastname = page.locator('#lastname');
        this.signUpEmail = page.locator('#email_address');
        this.signUpPassword = page.locator('#password');
        this.signUpPasswordConfirm = page.locator('#password-confirmation');
        this.createAccBtn = page.locator('.action.submit.primary');
        this.firstnameError = page.locator('#firstname-error');
        this.lastnameError = page.locator('#lastname-error');
        this.emailError = page.locator('#email_address-error');
        this.passwordError = page.locator('#password-error');
        this.cPasswordError = page.locator('#password-confirmation-error');
        //fakerAPI
        this.fName = faker.person.firstName();
        this.lName = faker.person.lastName();
        this.randomNum = faker.number.int({ min: 100, max: 999 });


        //SignIn
        this.email = page.locator('#email.input-text');
        this.password = page.locator('#pass.input-text');
        this.cPassword = page.locator('#password-confirmation');
        this.signInEmail = page.locator('#email');
        this.signInpassword = page.locator('#pass');
        this.signInBtn = page.locator('#send2');
        this.errorLogin = page.getByText('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
        this.errorEmail = page.locator('#email-error');
        this.errorPass = page.locator('#pass-error');
        this.errorRequired = page.getByText('A login and a password are required.');
        
    }

    //SignUp
    async verifyPersonalInformation() {
        await this.firstname.fill(this.fName);
        await this.lastname.fill(this.lName);
    }

    async verifySignUpInformation() {
        await this.signUpEmail.fill(`${this.fName}${this.lName}${this.randomNum}@guerrillamailblock.com`);
        await this.signUpPassword.fill('clientAccount@123');
        await this.signUpPasswordConfirm.fill('clientAccount@123');

    }

    async verifyclickCreateAccBtn() {
        await this.password.blur();
        await cc.customClick(this.createAccBtn);
    }

    async verifyRequiredErrorField() {
        const errors = [
            this.firstnameError,
            this.lastnameError,
            this.emailError,
            this.passwordError,
            this.cPasswordError,
          ];

            for (const error of errors) {
                await expect(error).toBeVisible();
            }
    }

    //SignIn
    async verifySignIn(accountUser) {
        switch (accountUser) {
            case 'user1':
                await this.signInEmail.fill(users.user.users1.Email);
                await this.signInpassword.fill(users.user.users1.Password);
                break;
            case 'user2':
                await this.signInEmail.fill(users.user.users2.Email);
                await this.signInpassword.fill(users.user.users2.Password);
                break;
        }
    }

    async verifyInvalidSignIn() {
        await this.signInEmail.fill(users.user.users1.Email);
        await this.signInpassword.fill(users.user.users1.WrongPassword);
    }

    async verifyclickSignInBtn() {
        await cc.customClick(this.signInBtn);
    }

    async verifyhomepage() {
        expect(this.page.url()).toContain('https://magento.softwaretestingboard.com/');
    }

    async verifyErrorLogin() {
        expect(await this.errorLogin.textContent()).toBe('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    }
    
    async verifyEmailError() {
        expect(await this.errorEmail.textContent()).toBe('This is a required field.');
    }

    async verifyPassError() {
        expect(await this.errorPass.textContent()).toBe('This is a required field.');
    }

    async verifyErrorRequired() {
        expect(await this.errorRequired.textContent()).toBe('A login and a password are required.');
    }


}

export default accountsPage;
