import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccLink = page.getByRole('link', { name: 'Create an Account'});
        this.loginLink = page.getByRole('link', { name: 'Sign In'});
        this.id = page.locator('#search');
    }

    //parameterized constructor
    getProductItem(productName) {
        return this.page.locator(`.product-item-name a[title="${productName}"]`);
    }

    getProductSize() {
        const sizes = ['XS', 'S', 'M', 'L', 'XL'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)]; 
        console.log(randomSize);
        return cc.customClick(this.page.getByRole("option", { name: randomSize }));
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
        const items = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie', 'fusion backpack', 'Push It Messenger Bag']; 
        const randomProduct = items[Math.floor(Math.random() * items.length)]; 
        await cc.customClick(this.getProductItem(items[5]));

        const itemWithSizes = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie'];
        if (itemWithSizes.includes(randomProduct)) {
            await this.getProductSize();
        }else{
            console.log('No size available for this product');
        }
    }

    // selectSize() {
    //     const size = ['XS', 'S', 'M', 'L', 'XL'];
    //     const randomSize = size[Math.floor(Math.random() * size.length)]; 
    //     return cc.customClick(this.getProductSize(randomSize));
    // }
}

export default homePage;
