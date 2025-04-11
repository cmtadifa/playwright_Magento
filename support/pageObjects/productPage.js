import { expect } from 'playwright/test';
import * as cc from '../commands';
import { faker } from '@faker-js/faker';
import users from '../../fixtures/test-data/users.json';
import * as texts from '../../fixtures/texts/textFixtures.json';

class productPage {
    constructor(page) {
        this.page = page;
        this.search = page.locator('#search');
        this.itemProductName = page.locator('.product-item-link');
        this.color = page.locator('.swatch-option.color');
        this.quantity = page.locator('.input-text.qty');
        this.addtocartBtn = page.locator('.action.primary.tocart');
        this.sizes = page.locator('.swatch-option.text');
        this.CheckoutBtn = page.locator('.action.primary.checkout');

        //shipping address
        this.fnameTxtfield = page.getByRole('textbox', { name: 'First Name' });
        this.lnameTxtfield = page.getByRole('textbox', { name: 'Last Name' });
        this.companyTxtfield = page.getByRole('textbox', { name: 'Company' });
        this.address1Txtfield = page.getByRole('textbox', { name: 'Street Address: Line 1' });
        this.address2Txtfield = page.getByRole('textbox', { name: 'Street Address: Line 2' });
        this.address3Txtfield = page.getByRole('textbox', { name: 'Street Address: Line 3' });
        this.cityTxtfield = page.getByRole('textbox', { name: 'City' });
        this.stateDropdown = page.getByRole('combobox', { name: 'State/Province' });
        this.zipTxtfield = page.getByRole('textbox', { name: 'Zip/Postal Code' });
        this.countryDropdown = page.getByRole('combobox', { name: 'Country' });
        this.phoneTxtfield = page.getByRole('textbox', { name: 'Phone Number' });
        this.fixedRadioBtn = page.getByRole('radio', { name: 'Fixed Flat Rate' });
        this.tableRateRadioBtn = page.getByRole('radio', { name: 'Table Rate Best Way' });
        this.shipNextBtn = page.locator('.button.action.continue.primary');

        this.recentAddress = page.locator('.shipping-address-item.selected-item');
        this.newAddress = page.locator('.action.action-show-popup');
        this.shipHereModalBtn = page.locator('.action.primary.action-save-address');

        this.thankYouPurchase = page.locator('.base');


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
        await this.successAddToCart().waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.successAddToCart()).toBeVisible();
        await expect(this.successAddToCart()).toHaveText(`You added ${this.randomProduct} to your shopping cart.`);
    }

    async clickCheckoutBtn() {
        await cc.customClick(this.CheckoutBtn);
    }

    /**
     * filling up shipping address
     * @param {string} accountUser - User identifier (e.g., 'user1')
     */
    async fillUpShippingAddress(accountUser){
        const randomState = faker.location.state({ abbreviated: false });
        const randomPhoneNumber = faker.phone.number('(###) ###-####');

            switch (accountUser) {
                case 'user1':
                    await expect(this.fnameTxtfield).toHaveValue(users.user.users1.FirstName);
                    await expect(this.lnameTxtfield).toHaveValue(users.user.users1.LastName);
                    break;
                case 'user2':
                    await expect(this.fnameTxtfield).toHaveValue(users.user.users2.FirstName);
                    await expect(this.lnameTxtfield).toHaveValue(users.user.users2.LastName);
                    break;
                case 'user3':
                    await expect(this.fnameTxtfield).toHaveValue(users.user.users3.FirstName);
                    await expect(this.lnameTxtfield).toHaveValue(users.user.users3.LastName);
                    break;
            }
            await this.companyTxtfield.fill(faker.company.name());
            await this.address1Txtfield.fill(faker.location.streetAddress());
            await this.address2Txtfield.fill(faker.location.streetAddress());
            await this.address3Txtfield.fill(faker.location.streetAddress());
            await this.cityTxtfield.fill(faker.location.city());
            await this.stateDropdown.selectOption({ label: randomState });
            await this.zipTxtfield.fill(faker.location.zipCode());
            await expect(this.countryDropdown).toHaveValue('US');
            await this.phoneTxtfield.fill(randomPhoneNumber);
    }

    async selectPaymentMethod() {
        const randomNum = Math.floor(Math.random() * 2) + 1;
            if (randomNum === 1) {
                await cc.customClick(this.fixedRadioBtn);
            } else {
                await cc.customClick(this.tableRateRadioBtn);
            }
    }

    /**
     * adressing on what to choose for shipping address
     * @param {string} accountUser - User identifier (e.g., 'user1')
     * @param {boolean} useRecentAddress - Whether to use saved address
     */
    async addressShippingAddress(accountUser, useRecentAddress = true) {
        if (useRecentAddress) {
            await cc.customClick(this.recentAddress);
            await this.selectPaymentMethod();
            await cc.customClick(this.shipNextBtn);
        }else{
            await cc.customClick(this.newAddress);
            await this.fillUpShippingAddress(accountUser);
            await cc.customClick(this.shipHereModalBtn);
            await this.selectPaymentMethod();
        }
    }

    /**
     * Sends item to shipping
     * @param {string} accountUser - User identifier (e.g., 'user1')
     * @param {boolean} useRecentAddress - Whether to use saved address
     * @param {boolean} [newAccount=false] - Whether this is a new account
     */
    async sendItem(accountUser, useRecentAddress, newAccount = false) {
       if (!newAccount){
            await this.addressShippingAddress(accountUser, useRecentAddress);
        }else{
            await this.fillUpShippingAddress(accountUser);
            await this.selectPaymentMethod();
            await cc.customClick(this.shipNextBtn);
       }
    }

    async clickshipNextBtn() {
        await cc.customClick(this.shipNextBtn);
    }
    
    async thankYouPurchaseMessage() {
        await expect(this.thankYouPurchase).toHaveText('Thank you for your purchase!');
    }

    async searchProduct() {
        const products = Object.values(texts.search);
        const randomIndex  = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];

        await this.search.fill(randomProduct);
        await this.search.press('Enter');
        await this.itemProductName.first().waitFor({ state: 'visible' });
        await expect(this.itemProductName.first()).toContainText(randomProduct);
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
