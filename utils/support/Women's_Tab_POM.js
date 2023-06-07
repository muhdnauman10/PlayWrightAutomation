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
    await this.page.waitForSelector("//button[@title='Place Order']", {
      timeout: 30000,
    });
    await this.page.locator("//button[@title='Place Order']").click();
    //await locator.waitFor();
  }
  async clickonWhoodies() {
    await this.page.locator("#ui-id-12").click();
  }
  async clickWitem1() {
    await this.page.locator("(//div[@class='product-item-info'])[2]").click();
  }
  async selectItemSize1() {
    await this.page.locator("#option-label-size-143-item-167").click();
  }
  async selectItemClr1() {
    await this.page.locator("#option-label-color-93-item-56").click();
  }
  async selectItemText() {
    await this.page.locator(".base").selectText();
  }
  async clickMoreInfo() {
    await this.page.locator("#tab-label-additional-title").click();
    await this.page.locator("#tab-label-additional-title").selectText();
  }
  async clickonWTees() {
    await this.page.locator("#ui-id-13").click();
  }
  async clickPriceFilter() {
    await this.page
      .locator("(//div[@class='filter-options-title'])[3]")
      .click();
  }
  async selectPriceOption() {
    const priceRangeOption = await this.page.locator("text=$30.00 - $39.99");
    await priceRangeOption.click();
  }
  async listStyle() {
    await this.page.locator("#mode-list").first().click();
  }
  async clickWitem2() {
    await this.page.locator("(//a[@class='product-item-link'])[1]").click();
  }
  async selectItemClr2() {
    await this.page.locator("#option-label-color-93-item-53").click();
  }
  async clickonWTanks() {
    await this.page.locator("#ui-id-14").click();
  }
  async waitForSorter() {
    await this.page.waitForSelector("#sorter");
  }
  async sortbyPrice() {
    await this.page.selectOption("#sorter", "price");
  }
  async clickWItem3() {
    await this.page
      .locator("(//li[@class='item product product-item'])[2]")
      .click();
  }
  async selectItemSize2() {
    await this.page.locator("#option-label-size-143-item-168").click();
  }
  async selectItemClr3() {
    await this.page.locator("#option-label-color-93-item-57").click();
  }
  async removeQty() {
    await this.page.locator("#qty").fill("");
  }
  async clickReviewTab() {
    await this.page.locator("#tab-label-reviews-title").click();
  }
  async productRating() {
    await this.page.locator("#Rating_3_label").click({ force: true });
  }
  async waitForSummary() {
    await this.page.locator("#summary_field").waitFor();
  }
  async fillSummary() {
    await this.page
      .locator("#summary_field")
      .fill("Purchase a product and giving review");
  }
  async fillReview() {
    await this.page
      .locator("#review_field")
      .fill("this is a test review comment");
  }
  async clickSubmitBtn() {
    await this.page.locator(".action.submit.primary").click();
  }
  async submitmsg() {
    const submit_msg = (
      await this.page.locator(".message-success.success.message").innerText()
    ).valueOf();
    console.log(submit_msg);
  }
  async clickExpandable() {
    await this.page.locator(".block.items-in-cart").click();
  }
  async selectItemClr4() {
    await this.page.locator("#option-label-color-93-item-60").click();
  }
  async hoveronWBottom() {
    await this.page.locator("#ui-id-10").hover();
  }
  async clickWPants() {
    await this.page.locator("#ui-id-15").click();
  }
  async clickWItem4() {
    await this.page
      .locator("(//li[@class='item product product-item'])[10]")
      .click();
  }
  async selectItemSize3() {
    await this.page.locator("#option-label-size-143-item-171").click();
  }
  async clickonWshort() {
    await this.page.locator("#ui-id-16").click();
  }
  async clickWItem5() {
    await this.page
      .locator("(//li[@class='item product product-item'])[4]")
      .click();
  }
  async selectItemSize4() {
    await this.page.locator("#option-label-size-143-item-172").click();
  }
  async selectItemClr5() {
    await this.page.locator("#option-label-color-93-item-52").click();
  }
  async clickAddToCompare() {
    await this.page.locator(".action.tocompare").click();
  }
  async deleteCart() {
    await this.page.locator(".action.delete").first().click();
  }
  async clickOK() {
    await this.page
      .locator("//button[@class='action-primary action-accept']")
      .click();
  }
}
