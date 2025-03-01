import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccTxt = page.getByRole('link', { name: 'Create an Account'});
    }

    async accessPage() {
        await this.page.goto('/'); 
        await expect(this.page).toHaveTitle(/Home Page/);
    }

    async createAcc() {
        await cc.customClick(this.createAccTxt);
    }
}

export default homePage;
