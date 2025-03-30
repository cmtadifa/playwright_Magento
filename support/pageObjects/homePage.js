import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccLink = page.getByRole('link', { name: 'Create an Account'});
        this.loginLink = page.getByRole('link', { name: 'Sign In'});
    }

    // Navigate to the homepage
    async navigate() {
        await this.page.goto('/'); 
        await expect(this.page).toHaveTitle(/Home Page/);1
    }

    async clickCreateAcc() {
        await cc.customClick(this.createAccLink);
    }

    async clickSignIn() {
        await cc.customClick(this.loginLink);
    }

    async gotoHomepage() {
        require('../TCM/accessHomepage');
    }

}

export default homePage;
