const { expect } = require("@playwright/test");

export class WomenTabPage {
  constructor(page) {
    this.page = page;
  }

  async hoveronWomenTab() {
    await this.page.locator("//a[@id='ui-id-4']").hover();
  }

  async hoveronWTop() {
    await this.page.locator("#ui-id-9").hover();
  }
  async clickonWJacket() {
    await this.page.locator("#ui-id-11").click();
  }
  async clickStyleFilter() {
    await this.page.locator("text='Style'").click();
  }
  async clickonTextJacket() {
    await this.page.locator("text='Jacket'").click();
  }
  async clickWItem() {
    await this.page.locator("a.product-item-link").nth(0).click();
  }
  async selectItemSize() {
    await this.page.locator("#option-label-size-143-item-166").click();
  }
  async selectItemClr() {
    await this.page.locator("#option-label-color-93-item-50").click();
  }
  async fillQty() {
    await this.page.locator("#qty").fill("3");
  }
  async addToCart() {
    await this.page.locator("#product-addtocart-button").click();
  }
  async clickCartIcon() {
    await this.page.locator("//a[@class='action showcart']").click();
  }
  async clickProceedtoChcout() {
    await this.page.locator("#top-cart-btn-checkout").click();
  }
  async waitLoadState() {
    await this.page.waitForLoadState("networkidle");
  }
  async clickNextBtn() {
    await this.page.locator("//button[@data-role='opc-continue']").click();
  }
  async clickPlaceOrder() {
    await this.page.waitForSelector("//button[@title='Place Order']");
    await this.page.locator("//button[@title='Place Order']").click();
    //await locator.waitFor();
  }
}
