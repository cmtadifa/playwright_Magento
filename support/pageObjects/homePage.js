import { expect } from '@playwright/test';
import { link } from 'fs';

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
        await this.createAccTxt.click();
    }
}

export default homePage;
