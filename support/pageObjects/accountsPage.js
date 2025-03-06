import { expect } from '@playwright/test';
import homePage from './homePage'; 
import * as cc from '../commands';
class accountsPage {
    constructor(page) {
        this.page = page;
        this.firstname = page.locator('#firstname');
    }

    
    async fillPersonalInformation() {
        await this.firstname.fill('John');
        await expect(this.firstname).toHaveValue('John');

    }

    async fillSignInInformation() {
        await this.firstname.fill('John');
        await expect(this.firstname).toHaveValue('John');

    }

    async clickCreateAccBtn() {
        //test btn
    }

  
}

export default accountsPage;
