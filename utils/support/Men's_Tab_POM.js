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
  async selectProductClr() {
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
    await this.page.waitForSelector("#top-cart-btn-checkout");
    await this.page.locator("#top-cart-btn-checkout").click();
  }
  async waitNetworkIdle() {
    await this.page.waitForLoadState("networkidle", { timeout: 30000 });
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
    await this.page.waitForSelector("//button[@title='Place Order']");
    await this.page.locator("//button[@title='Place Order']").click();
    //await locator.waitFor();
  }
  //async selectSpanText() {
  //await this.page
  //.locator("//span[@data-ui-id='page-title-wrapper']")
  //.selectText();
  // await this.page
  // .locator("//span[@data-ui-id='page-title-wrapper']")
  //.selectText();
  //}
  async clickContinueShopping() {
    await this.page.locator(".action.primary.continue").click();
  }
  async clickOnHoodies() {
    await this.page.locator("#ui-id-20").click();
  }
  async listStyle() {
    await this.page.locator("#mode-list").first().click();
  }
  async clickHoodieSize() {
    await this.page.locator("#option-label-size-143-item-166").first().click();
  }
  async selectHoodieClr() {
    await this.page.locator("#option-label-color-93-item-50").first().click();
  }
  async clickAddToCart5() {
    await this.page.locator("(//button[@title='Add to Cart'])[1]").click();
  }
  async successMsg() {
    const item_success_msg = (
      await this.page.locator(".message-success.success.message").innerText()
    ).valueOf();
    console.log(item_success_msg);
  }
  async selectSuccessText() {
    await this.page.locator(".message-success.success.message").selectText();
  }
  async clickCartIcon2() {
    await this.page.locator("//a[@class='action showcart']").click();
  }
  async clickOnTees() {
    await this.page.locator("#ui-id-21").click();
  }
  async clickonProduct() {
    await this.page.locator(".product.name.product-item-name").first().click();
  }
  async selectTeeSize() {
    await this.page.locator("#option-label-size-143-item-169").click();
  }
  async selectTeeClr() {
    await this.page.locator("#option-label-color-93-item-58").click();
  }
  async clickAddToCart6() {
    await this.page.locator("#product-addtocart-button").click();
  }
  async clickOnTanks() {
    await this.page.locator("#ui-id-22").click();
  }
  async clickonProductItem() {
    await this.page
      .locator("(//li[@class='item product product-item'])[4]")
      .click();
  }
  async selectTankSize() {
    await this.page.locator("#option-label-size-143-item-168").click();
  }
  async hoveronBottom() {
    await this.page.locator("#ui-id-18").hover();
  }
  async clickonShorts() {
    await this.page.locator("#ui-id-24").click();
  }
  async waitForSorter() {
    await this.page.waitForSelector("#sorter");
  }
  async sortbyPrice() {
    await this.page.selectOption("#sorter", "price");
  }
  async clickonProduct2() {
    await this.page
      .locator("(//li[@class='item product product-item'])[5]")
      .click();
  }
  async selectProductSize() {
    await this.page.locator("#option-label-size-143-item-176").click();
  }
  async selectProductClr2() {
    await this.page.locator("#option-label-color-93-item-53").click();
  }
  async selectProductText() {
    await this.page.locator(".base").selectText();
  }
  async printOrderNum() {
    const order_number = (
      await this.page.locator(".checkout-success").innerText()
    ).valueOf();
    console.log(order_number);
  }
  async addtoWishList() {
    await this.page.locator("(//a[@class='action towishlist'])[1]").click();
  }
  async printsuccessmsg() {
    const wishlist_msg = (
      await this.page.locator("(//div[@class='messages'])[1]").innerText()
    ).valueOf();
    console.log(wishlist_msg);
  }
  async clickPantTab() {
    await this.page.locator("#ui-id-23").click();
  }
  async clickPagination() {
    await this.page.waitForSelector("(//li[@class='item pages-item-next'])[2]");
    await this.page.locator("(//li[@class='item pages-item-next'])[2]").click();
  }
  async clickProductTitle() {
    await this.page.locator(".product-item-link").nth(1).click();
  }
  async selectProductSize2() {
    await this.page.locator("#option-label-size-143-item-175").click();
  }
  async selectProductClr3() {
    await this.page.locator("#option-label-color-93-item-49").click();
  }
  async detailProductText() {
    await this.page.locator(".product.attribute.description").selectText();
  }
  async deleteCart() {
    await this.page.locator(".action.delete").first().click();
  }
  async clickOK() {
    await this.page
      .locator("//button[@class='action-primary action-accept']")
      .click();
  }
  async clickonJacket() {
    await this.page.locator("a.product-item-link").nth(1).click();
  }
  //   async priceTextContent() {
  //     const price = await this.page.$eval(
  //       "#product-price-238",
  //       (el) => el.textContent
  //     );
  //   }
  //   async parseFloat() {
  //     const numericPrice = parseFloat(price.replace("$", ""));
  //     if (numericPrice < 70) {
  //       await this.page.locator("#qty").click();
  //       await this.page.locator("#qty").fill("4");
  //     }
  //   }

  async priceTextContent() {
    const price = await this.page.$eval(
      "#product-price-238",
      (el) => el.textContent
    );
    return price; // Return the price value
  }

  async parseFloat() {
    const price = await this.priceTextContent(); // Get the price value
    const numericPrice = parseFloat(price.replace("$", ""));
    if (numericPrice < 70) {
      await this.page.locator("#qty").click();
      await this.page.locator("#qty").fill("4");
    }
  }
}