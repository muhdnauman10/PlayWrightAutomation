const { expect } = require("@playwright/test");

export class Search {
  constructor(page) {
    this.page = page;
  }

  async inputSearch() {
    await this.page.locator("#search").type("Gym Jacket");
  }
  async clickSearchIcon() {
    await this.page.locator(".action.search").click();
  }
  async hoveronPrice() {
    await this.page.locator("#product-price-334").hover();
  }
  async selectSize() {
    await this.page.locator("#option-label-size-143-item-170").nth(0).click();
  }
  async selectClr() {
    await this.page.locator("#option-label-color-93-item-53").nth(0).click();
  }
  async clickAddtoCart() {
    await this.page
      .locator("xpath=//button[@title='Add to Cart']")
      .nth(0)
      .click();
  }
  async clickNextPage() {
    await this.page.locator("xpath=//a[@title='Next']").nth(1).click();
  }
  async waitLoadState() {
    await this.page.waitForLoadState("networkidle");
  }
  async changePageSize() {
    await this.page.locator("#limiter").nth(1).selectOption("24");
  }
  async clickadvanceSearch() {
    await this.page.locator("text='Advanced Search'").last().click();
  }
  async enterPrice() {
    await this.page.locator("#price").fill("10");
  }
  async enterPriceToField() {
    await this.page.locator("#price_to").type("2000");
  }
  async clickSearchField() {
    await this.page.locator("(//button[@title='Search'])[2]").click();
  }
  async printSearchMsg() {
    const search_msg = (
      await this.page.locator("//div[@class='search found']").innerText()
    ).valueOf();
    console.log(search_msg);
  }
  async enterProductName() {
    await this.page.locator("#name").type("Jacket");
  }
  async enterSKU() {
    await this.page.locator("#sku").type("Mj");
  }
}