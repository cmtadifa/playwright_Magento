import { expect } from '@playwright/test';
import * as cc from '../commands';
class accountsPage {
    constructor(page) {
        this.page = page;
        this.firstname = page.locator('#firstname');
    }

    async testFName() {
        await this.firstname.fill('John');
        await expect(this.firstname).toHaveValue('John');
    }
}

export default accountsPage;
