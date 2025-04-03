import { expect } from '@playwright/test';
import * as cc from '../commands';
class homePage {
    constructor(page) {
        this.page = page;
        this.createAccLink = page.getByRole('link', { name: 'Create an Account'});
        this.loginLink = page.getByRole('link', { name: 'Sign In'});
        this.navigationArrow = page.getByRole('menuitem', { name: 'Women'});
    }

    //parameterized constructor
    getMainNavigation(navigationName) {
        return this.page.locator(`.level0.nav-${navigationName}`);
    }

    getSubNavigation(subNavigationName) {
        return this.page.getByRole('menuitem', { name: `${subNavigationName}` });
    }

    // Navigate to the homepage
    async navigate() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' }); 
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

    async selectNavigation(navigationName) {
        switch(navigationName) {
            case 'whats-new':
                await this.getMainNavigation('1').click();
                break;
            case 'women':
                await this.getMainNavigation('2').hover();
                break;
            case 'men':
                await this.getMainNavigation('4').click();
                break;
            case 'gear':
                await this.getMainNavigation('5').click();
                break;
            case 'training':
                await this.getMainNavigation('6').click();
                break;
            case 'sale':
                await this.getMainNavigation('7').click();
                break;
        }
    }

    async selectSubNavigation(subNavigationName) {
        switch(subNavigationName) {
            case 'women-tops':
                await this.getSubNavigation('Tops').hover();
                break;
            case 'women-bottoms':
                await this.getSubNavigation('Bottoms').hover();
                break;
        }
    }

    async waitNavigationArrow() {
        await this.navigationArrow.waitFor({ state: 'visible' });
    }

}

export default homePage;
