const { expect } = require("@playwright/test");

export class MenTabPage {
  constructor(page) {
    this.page = page;
  }

  async hoveronMen() {
    await this.page.locator("#ui-id-5").hover();
  }
  async hoveronTop() {
    await this.page.locator("#ui-id-17").hover();
  }
  async clickMenTab() {
    await this.page.locator("#ui-id-19").click();
  }
  async clickFirstJacket() {
    await this.page
      .locator("//div[@id='option-label-size-143-item-166']")
      .nth(0)
      .click();
  }
  async selectJacketClr() {
    await this.page.locator("#option-label-color-93-item-49").nth(0).click();
  }
  async clickAddToCart() {
    await this.page.locator("//button[@title='Add to Cart']").first().click();
  }
  async clickSecondJacket() {
    await this.page.locator("#option-label-size-143-item-166").nth(7).click();
  }
  async selectJacketClr2() {
    await this.page.locator("#option-label-color-93-item-58").nth(3).click();
  }
  async clickAddToCart2() {
    await this.page.locator("//button[@title='Add to Cart']").nth(7).click();
  }
  async hoveronJacket() {
    await this.page.locator("a.product-item-link").nth(5).hover();
  }
  async selectJacketSize() {
    await this.page.locator("#option-label-size-143-item-169").nth(5).click();
  }
  async selectJacketClr3() {
    await this.page.locator("#option-label-color-93-item-60").nth(0).click();
  }
  async clickAddToCart3() {
    await this.page.locator("//button[@title='Add to Cart']").nth(5).click();
  }
  async selectProduct() {
    await this.page.locator("(//a[@class='product-item-link'])[9]").click();
  }
  async printProductTitle() {
    const product_title = await this.page
      .locator(".base")
      .innerText()
      .valueOf();
    console.log(product_title);
  }
  async verifyText() {
    await expect(this.page.locator("//div[@title='Availability']")).toHaveText(
      "In stock"
    );
  }
  async selectJacketSize2() {
    await this.page.locator("//div[@option-id='170']").click();
  }
  async selectJacketClr4() {
    await this.page.locator("#option-label-color-93-item-50").click();
  }
  async qtyToBeVisible() {
    await expect(this.page.locator("#qty")).toBeVisible();
  }
  async fillQuantity() {
    await this.page.locator("#qty").fill("10");
  }
  async clickAddToCart4() {
    await this.page.locator("//button[@type='submit']").nth(1).click();
  }
  async clickReviewTab() {
    await this.page.locator("#tab-label-reviews-title").click();
  }
  async productRating() {
    await this.page.locator("#Rating_1").click({ force: true });
  }
  async waitForNickName() {
    await this.page.locator("#nickname_field").waitFor();
  }
  async typeNickName() {
    await this.page.locator("#nickname_field").type("John");
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
  async selectJacketText() {
    await this.page
      .locator("//span[@data-ui-id='page-title-wrapper']")
      .selectText();
  }
  async clickCartIcon() {
    await this.page.locator("(//span[@class='counter qty'])[2]").click();
  }
  async clickProceedCheckOutBtn() {
    await this.page.locator("#top-cart-btn-checkout").click();
  }
  async waitNetworkIdle() {
    await this.page.waitForLoadState("networkidle");
  }
  async inputStreetAdres() {
    await this.page
      .locator("//input[@name='street[0]']")
      .type("Demo Street#100 NewYork NJ");
    // add city
    //await page.locator("//input[@name='city']").fill("New Jersey");
    // Add province
    //await page.locator("//select[@name='region_id']").selectOption("Alaska");
    // Add Postal code
    //await page.locator("//input[@name='postcode']").fill("08873");
    // Add Country
    //await page.locator("//select[@name='country_id']").selectOption("Pakistan");
    // Add phone number
    //await page.locator("//input[@name='telephone']").type("+92354575100");
  }
  async chkRadioBtn() {
    await this.page.locator("input[value='flatrate_flatrate']").check();
  }
  async clickNextBtn() {
    await this.page.locator("//button[@data-role='opc-continue']").click();
  }
  async clickPlaceOrder() {
    const locator = this.page.locator("//button[@title='Place Order']");

    //await this.page.waitForSelector("//button[@title='Place Order']");
    //await locator.waitFor();
    await locator.click();
  }
  async selectSpanText() {
    await this.page
      .locator("//span[@data-ui-id='page-title-wrapper']")
      .selectText();
  }
}
