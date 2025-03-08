import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
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

        this.fName = faker.person.firstName();
        this.lName = faker.person.lastName();
        this.randomNum = faker.number.int({ min: 100, max: 999 });
    }

    
    async fillPersonalInformation() {
        await this.firstname.fill(this.fName);
        await this.lastname.fill(this.lName);
    }

    async fillSignInInformation() {
        await this.email.fill(`${this.fName}${this.lName}${this.randomNum}@guerrillamailblock.com`);
        await this.password.fill('clientAccount@123');
        await this.cPassword.fill('clientAccount@123');

    }

    async clickCreateAccBtn() {
        await cc.customClick(this.createAccBtn);
    }

  
}

export default accountsPage;
