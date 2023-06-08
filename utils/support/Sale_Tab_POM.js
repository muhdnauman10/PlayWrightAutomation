export class Sale {
  constructor(page) {
    this.page = page;
  }
  async clickSaleTab() {
    await this.page.locator("#ui-id-8").click();
  }
  async clickShortsOption() {
    await this.page
      .locator(
        "(//a[@href='https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html'])[2]"
      )
      .click();
  }
  async hoveronProduct() {
    await this.page.locator("a.product-item-link").nth(0).hover();
  }
  async selectSize() {
    await this.page.locator("#option-label-size-143-item-175").first().click();
  }
  async selectClr() {
    await this.page.locator("#option-label-color-93-item-49").first().click();
  }
  async clickAddtoCart() {
    await this.page.locator("//button[@title='Add to Cart']").first().click();
  }
  async clickCartIcon() {
    await this.page.locator("//a[@class='action showcart']").click();
  }
  async clickCheckOutBtn() {
    await this.page.locator("#top-cart-btn-checkout").click();
  }
  async waitNetworkIdle() {
    await this.page.waitForLoadState("networkidle");
  }
  async clickNxtBtn() {
    await this.page.locator("//button[@data-role='opc-continue']").click();
  }
  async clickPlaceOrder() {
    await this.page.waitForSelector("//button[@title='Place Order']", {
      timeout: 30000,
    });
    await this.page.locator("//button[@title='Place Order']").click();
  }
}
