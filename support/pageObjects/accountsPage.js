import { expect } from '@playwright/test';
import homePage from './homePage'; 
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
    }

    
    async fillPersonalInformation() {
        await this.firstname.fill('John');
        await this.lastname.fill('Doe');
    }

    async fillSignInInformation() {
        await this.email.fill('asad@asd.com');
        await this.password.fill('123456');
        await this.cPassword.fill('123456');

    }

    async clickCreateAccBtn() {
        await cc.customClick(this.createAccBtn);
    }

  
}

export default accountsPage;
