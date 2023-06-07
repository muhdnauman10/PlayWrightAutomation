const { expect } = require("@playwright/test");

export class GearTabPage {
  constructor(page) {
    this.page = page;
  }

  async hoveronGearTab() {
    await this.page.locator("#ui-id-6").hover();
  }
  async clickonBag() {
    await this.page.locator("#ui-id-25").click();
  }
  async clickonDescending() {
    await this.page
      .locator("(//a[@title='Set Descending Direction'])[1]")
      .click();
  }
  async clickonGItem() {
    await this.page
      .locator("(//li[@class='item product product-item'])[6]")
      .click();
  }
  async clickAddToCart() {
    await this.page.locator("#product-addtocart-button").click();
  }
  async selectItemText() {
    await this.page.locator(".base").selectText();
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
    await this.page.waitForSelector("//button[@title='Place Order']", {
      timeout: 30000,
    });
    await this.page.locator("//button[@title='Place Order']").click();
    //await locator.waitFor();
  }
  async printOrderNum() {
    const order_number = (
      await this.page.locator(".checkout-success").innerText()
    ).valueOf();
    console.log(order_number);
  }
  async clickFytEquipment() {
    await this.page.locator("#ui-id-26").click();
  }
  async clickGItem() {
    await this.page
      .locator("(//li[@class='item product product-item'])[11]")
      .click();
  }
  async removeQty() {
    await this.page.locator("#qty").fill("");
  }
  async fillQty() {
    await this.page.locator("#qty").fill("3");
  }
  async clickFilter() {
    await this.page.locator("text='Gender'").click();
  }
  async selectOption() {
    //await this.page.selectOption("text='Men'", "Men");
    await this.page.locator("text='Men'").last().click();
  }
  async clickFilter1() {
    await this.page.locator("text='Activity'").click();
  }
  async selectOption1() {
    await this.page.locator("text='Gym'").click();
  }
  async clickonWatch() {
    await this.page.locator("#ui-id-27").click();
  }
  async clickGItem1() {
    await this.page
      .locator("(//li[@class='item product product-item'])[3]")
      .click();
  }
  async selectSuccessMsg() {
    await this.page.locator(".message-success.success.message").selectText();
  }
  
}
