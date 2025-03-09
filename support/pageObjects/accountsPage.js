import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import users from '../../fixtures/test-data/users.json';
import * as cc from '../commands';

class accountsPage {
    constructor(page) {
        this.page = page;
        this.firstname = page.locator('#firstname');
        this.lastname = page.locator('#lastname');
        this.email = page.locator('#email_address');
        this.password = page.locator('#password');
        this.cPassword = page.locator('#password-confirmation');
        this.createAccBtn = page.locator('.action.submit.primary');
        this.signInEmail = page.locator('#email');
        this.signInpassword = page.locator('#pass');
        this.signInBtn = page.locator('#send2');

        //fakerAPI
        this.fName = faker.person.firstName();
        this.lName = faker.person.lastName();
        this.randomNum = faker.number.int({ min: 100, max: 999 });
    }

    //sign up
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
        expect(this.page.url()).toBe('https://magento.softwaretestingboard.com/customer/account/');
    }

    //sign in
    async verifySignIn() {
        await this.signInEmail.fill(users.user.users1.Email);
        await this.signInpassword.fill(users.user.users1.Password);
    }

    async verifyclickSignInBtn() {
        await cc.customClick(this.signInBtn);
        expect(this.page.url()).toBe('https://magento.softwaretestingboard.com/');
    }

  
}

export default accountsPage;
