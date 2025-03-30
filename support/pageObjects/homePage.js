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

    selectProductSize() {
        const sizes = ['XS', 'S', 'M', 'L', 'XL'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)]; 
        return cc.customClick(this.page.getByRole("option", { name: randomSize }));
    }

    async selectProductColor() {
        const colorCount = await this.color.count();
        if (colorCount > 0) {
            const randomColor = Math.floor(Math.random() * colorCount);
            await cc.customClick(this.color.nth(randomColor));
        } else {
            console.log('No color available for this product');
        }
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

    async selectItem() {
        const items = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie', 'Fusion Backpack', 'Push It Messenger Bag']; 
        const randomProduct = items[Math.floor(Math.random() * items.length)]; 
        await this.getProductItem(randomProduct).click();

        const itemWithSizes = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie'];
        if (itemWithSizes.includes(randomProduct)) {

            await this.selectProductSize();

            await this.selectProductColor();

        }else{
            console.log('No size available for this product');
        }

    }
}

export default homePage;
