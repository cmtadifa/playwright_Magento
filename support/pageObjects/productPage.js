import { expect } from 'playwright/test';
import * as cc from '../commands';
import { time } from 'console';

class productPage {
    constructor(page) {
        this.page = page;
        this.id = page.locator('#search');
        this.color = page.locator('.swatch-option.color');
        this.quantity = page.locator('.input-text.qty');
        this.addtocartBtn = page.locator('.action.primary.tocart');
        this.sizes = page.locator('.swatch-option.text');
        this.cartCheckoutBtn = page.locator('#top-cart-btn-checkout');

        this.randomProduct = '';
    }

    //parameterized constructor
    getProductItem(productName) {
        return this.page.locator(`.product-item-name a[title="${productName}"]`);
    }

    successAddToCart() {
        return this.page.getByText(`You added ${this.randomProduct} to your shopping cart.`);
    }

    //async blocks
    async selectItem() {
        const items = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie'];  //, 'Fusion Backpack', 'Push It Messenger Bag' these are the items NOT available in stocks
        this.randomProduct = items[Math.floor(Math.random() * items.length)]; 
        await this.getProductItem(this.randomProduct).click();

        const itemWithSizes = ['Radiant Tee', 'Breathe-Easy Tank', 'Argus All-Weather Tank', 'Hero Hoodie'];
        if (itemWithSizes.includes(this.randomProduct)) {
            await this.selectProductSize();
            await this.selectProductColor();
        }else{
            console.log('No size available for this product');
        }
    }

    async selectProductSize() {
        const sizes = await this.sizes.count();
        const randomSize = Math.floor(Math.random() * sizes);
        await cc.customClick(this.sizes.nth(randomSize));
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

    async enterQuantity() {
        const quantity = Math.floor(Math.random() * 4) + 1; 
        await this.quantity.fill(quantity.toString());
    }

    async clickaddToCartBtn() {
        await cc.customClick(this.addtocartBtn);
    }

    async successAddToCartMessage() {
        await expect(this.successAddToCart()).toBeVisible();
        await expect(this.successAddToCart()).toHaveText(`You added ${this.randomProduct} to your shopping cart.`);
    }

    async clickCartCheckoutBtn() {
        await cc.customClick(this.cartCheckoutBtn);
    }

    //method of the class
    async addingToCart() {
        await this.selectItem();
        await this.enterQuantity();
        await this.clickaddToCartBtn();
        await this.successAddToCartMessage();
    }
}

export default productPage;
