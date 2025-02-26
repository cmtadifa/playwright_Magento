class homePage {
    constructor(page) {
        this.page = page;
        this.createAccTxt = page.locator('a=Create an account');
      }

//to enhance
    async testCreateAcc() {

    }
}

export default homePage();