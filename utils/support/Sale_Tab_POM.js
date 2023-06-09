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
  async clickPantOption() {
    await this.page
      .locator(
        "//a[@href='https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html']"
      )
      .nth(1)
      .click();
  }
  async selectText() {
    await this.page.locator("#page-title-heading").selectText();
  }
  async hoveronProduct1() {
    await this.page.locator("#product-price-880").hover();
  }
  async selectSize1() {
    await this.page.locator("#option-label-size-143-item-177").nth(0).click();
  }
  async selectClr1() {
    await this.page.locator("#option-label-color-93-item-58").nth(0).click();
  }
  async clickAddtoCart1() {
    await this.page
      .locator("xpath=//button[@title='Add to Cart']")
      .nth(0)
      .click();
  }
  async clickMaterialOption() {
    await this.page
      .locator("(//div[@class='filter-options-title'])[5]")
      .click();
  }
  async selectPolyester() {
    await this.page.locator("text=' Polyester '").click();
  }
  async selectProduct1() {
    await this.page
      .locator("(//strong[@class='product name product-item-name'])[7]")
      .click();
  }
  async selectSize2() {
    await this.page.locator("#option-label-size-143-item-175").click();
  }
  async selectClr2() {
    await this.page.locator("#option-label-color-93-item-50").click();
  }
  async clickAddtoCart2() {
    await this.page.locator("#product-addtocart-button").click();
  }
  async selectSuccessMsg() {
    await this.page.locator(".message-success.success.message").selectText();
  }
  async hoveronTrainingTab() {
    await this.page.locator("#ui-id-7").hover();
  }
  async clickVideoDwnld() {
    await this.page.locator("#ui-id-28").click();
  }
  async selectNotyMsg() {
    await this.page.locator(".message.info.empty").selectText();
  }
  async goToWishList() {
    await this.page.locator(".action.details").click();
  }
}
