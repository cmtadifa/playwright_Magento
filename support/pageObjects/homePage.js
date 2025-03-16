import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccLink = page.getByRole('link', { name: 'Create an Account'});
        this.loginLink = page.getByRole('link', { name: 'Sign In'});
        this.productItem = page.getByRole('linstitem', { name: 'Product'});
        this.id = page.locator('#search');
    }

    //parameterized consatructor
    getProductItem(productName) {
        return this.page.getByRole('listitem', { name: productName }); 
    }

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

    async selectItem() {
        // const items = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank']
        // const randomProduct = items[Math.floor(Math.random() * items.length)]; 
        // await cc.customClick(this.getProductItem(randomProduct));
        await this.id.fill('1234');
    }
}

export default homePage;
