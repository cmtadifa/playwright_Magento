import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccLink = page.getByRole('link', { name: 'Create an Account'});
        this.loginLink = page.getByRole('link', { name: 'Sign In'});
        this.id = page.locator('#search');
        this.color = page.locator('.swatch-option.color');
    }

    //parameterized constructor
    getProductItem(productName) {
        return this.page.locator(`.product-item-name a[title="${productName}"]`);
    }

    //refactor to handle unavailable sizes
    getProductSize() {
        const sizes = ['XS', 'S', 'M', 'L', 'XL'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)]; 
        return cc.customClick(this.page.getByRole("option", { name: "randomSize" }));
    }

    // getProductColor() {
    //     const color = ['Blue', 'Orange', 'Purple', 'White', 'Yellow', 'Gray', 'Black', 'Green'];
    //     const randomColor = Math.floor(Math.random() * 11);
    //     if (this.color[1])
    //     return cc.customClick(this.page.locator(`.swatch-option.color[randomColor]`));
    // }

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
        const colorCount = this.color.count();
        await cc.customClick(this.getProductItem(randomProduct));

        const itemWithSizes = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie'];
        if (itemWithSizes.includes(randomProduct)) {
            await this.getProductSize();
        }else{
            console.log('No size available for this product');
        }

        // if (colorCount) {
        //     const colorLength = this.color.length();
        //     const randomColor = Math.floor(Math.random() * colorLength);
        //     await cc.customClick(this.color[randomColor]);
        // }else{
        //     console.log('No color available for this product');
        // }
    }
}

export default homePage;
