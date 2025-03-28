import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import users from '../../fixtures/test-data/users.json';
import * as cc from '../commands';

class accountsPage {
    constructor(page) {
        this.page = page;

        //SignUp
        this.firstname = page.locator('#firstname');
        this.lastname = page.locator('#lastname');
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
        this.email = page.locator('#email_address');
        this.password = page.locator('#password');
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

    async verifySignInInformation() {
        await this.email.fill(`${this.fName}${this.lName}${this.randomNum}@guerrillamailblock.com`);
        await this.password.fill('clientAccount@123');
        await this.cPassword.fill('clientAccount@123');

    }

    async verifyclickCreateAccBtn() {
        await cc.customClick(this.createAccBtn);
    }

    async verifyRequiredErrorField() {
        await expect(this.firstnameError, this.lastnameError, this.emailError, this.passwordError, this.cPasswordError).toBeVisible();
    }

    //SignIn
    async verifySignIn() {
        await this.signInEmail.fill(users.user.users1.Email);
        await this.signInpassword.fill(users.user.users1.Password);
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
