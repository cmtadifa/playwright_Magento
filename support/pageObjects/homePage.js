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

    async selectNavigation(navigationName, action = 'click') {
        let navigationElement;
        
        switch(navigationName) {
            case 'whats-new':
                navigationElement = this.getMainNavigation('1');
                break;
            case 'women':
                navigationElement = this.getMainNavigation('2');
                break;
            case 'men':
                navigationElement = this.getMainNavigation('3');
                break;
            case 'gear':
                navigationElement = this.getMainNavigation('4');
                break;
            case 'training':
                navigationElement = this.getMainNavigation('5');
                break;
            case 'sale':
                navigationElement = this.getMainNavigation('6');
                break;
        }
        
        if (action.toLowerCase() === 'hover') {
            await navigationElement.hover();
        } else {
            await navigationElement.click();
        }
    }

    async selectSubNavigation(subNavigationName, action = 'click') {
        let subNavigationElement;

        switch(subNavigationName) {
            case 'tops':
                subNavigationElement = this.getSubNavigation('Tops');
                break;
            case 'bottoms':
                subNavigationElement = this.getSubNavigation('Bottoms');
                break;
            case 'bags':
                subNavigationElement = this.getSubNavigation('Bags');
                break;
            case 'fitness_equipment':
                subNavigationElement = this.getSubNavigation('Fitness Equipment');
                break;
            case 'watches':
                subNavigationElement = this.getSubNavigation('Watches');
                break;
            case 'video_download':
                subNavigationElement = this.getSubNavigation('Video Download');
                break;
        }

        if (action.toLowerCase() === 'hover') {
            await subNavigationElement.hover();
        } else {
            await subNavigationElement.click();
        }
    }

    async waitNavigationArrow() {
        await this.navigationArrow.waitFor({ state: 'visible' });
    }

}

export default homePage;
