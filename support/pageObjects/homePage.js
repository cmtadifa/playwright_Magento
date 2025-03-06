import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccTxt = page.getByRole('link', { name: 'Create an Account'});
    }

    async navigate() {
        await this.page.goto('/'); 
        await expect(this.page).toHaveTitle(/Home Page/);
    }

    async clickCreateAcc() {
        await cc.customClick(this.createAccTxt);
    }

    async gotoHomepage() {
        require('../TCM/accessHomepage');
    }
}

export default homePage;
